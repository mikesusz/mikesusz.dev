import Database from 'better-sqlite3';
import { existsSync, mkdirSync } from 'fs';

// Use /app/data in production (Coolify), fall back to local ./data in development
const DATA_DIR =
	process.env.DATA_DIR || (process.env.NODE_ENV === 'production' ? '/app/data' : './data');
const DB_PATH = `${DATA_DIR}/pageviews.db`;

// Ensure data directory exists
if (!existsSync(DATA_DIR)) {
	mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize database connection
const db = new Database(DB_PATH);

// Create pageviews table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS pageviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT NOT NULL,
    referrer TEXT,
    user_agent TEXT,
    timestamp INTEGER NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_path ON pageviews(path);
  CREATE INDEX IF NOT EXISTS idx_timestamp ON pageviews(timestamp);

  -- Aggregated daily stats for historical data (after cleanup)
  CREATE TABLE IF NOT EXISTS daily_stats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    path TEXT NOT NULL,
    views INTEGER NOT NULL,
    UNIQUE(date, path)
  );

  CREATE INDEX IF NOT EXISTS idx_daily_stats_date ON daily_stats(date);
`);

export interface PageView {
	path: string;
	referrer?: string;
	user_agent?: string;
	timestamp: number;
}

export interface PageViewStats {
	path: string;
	views: number;
}

export interface DailyStats {
	date: string;
	views: number;
}

// Insert a new pageview
export function recordPageView(pageview: PageView) {
	const stmt = db.prepare(`
    INSERT INTO pageviews (path, referrer, user_agent, timestamp)
    VALUES (?, ?, ?, ?)
  `);

	return stmt.run(
		pageview.path,
		pageview.referrer || null,
		pageview.user_agent || null,
		pageview.timestamp
	);
}

// Get total pageviews
export function getTotalPageViews(): number {
	const result = db.prepare('SELECT COUNT(*) as count FROM pageviews').get() as { count: number };
	return result.count;
}

// Get pageviews by path
export function getPageViewsByPath(): PageViewStats[] {
	return db
		.prepare(
			`
    SELECT path, COUNT(*) as views
    FROM pageviews
    GROUP BY path
    ORDER BY views DESC
    LIMIT 50
  `
		)
		.all() as PageViewStats[];
}

// Get daily pageviews for the last N days
export function getDailyPageViews(days: number = 30): DailyStats[] {
	const cutoffTime = Date.now() - days * 24 * 60 * 60 * 1000;

	return db
		.prepare(
			`
    SELECT
      DATE(timestamp / 1000, 'unixepoch') as date,
      COUNT(*) as views
    FROM pageviews
    WHERE timestamp >= ?
    GROUP BY date
    ORDER BY date DESC
  `
		)
		.all(cutoffTime) as DailyStats[];
}

// Detect if a user agent is likely a bot
export function isLikelyBot(userAgent: string | null): boolean {
	if (!userAgent) return true;

	const botPatterns = [
		/bot/i,
		/crawler/i,
		/spider/i,
		/scraper/i,
		/headless/i,
		/curl/i,
		/wget/i,
		/python/i,
		/java/i,
		/apache/i,
		/http/i,
		/scan/i
	];

	return botPatterns.some((pattern) => pattern.test(userAgent));
}

// Get recent pageviews
export function getRecentPageViews(limit: number = 100) {
	return db
		.prepare(
			`
    SELECT path, referrer, user_agent, timestamp, created_at
    FROM pageviews
    ORDER BY timestamp DESC
    LIMIT ?
  `
		)
		.all(limit);
}

// Get historical daily stats (from aggregated table)
export function getHistoricalDailyStats(days: number = 365): DailyStats[] {
	return db
		.prepare(
			`
    SELECT date, SUM(views) as views
    FROM daily_stats
    GROUP BY date
    ORDER BY date DESC
    LIMIT ?
  `
		)
		.all(days) as DailyStats[];
}

// Get total views from aggregated historical data
export function getHistoricalTotalViews(): number {
	const result = db.prepare('SELECT COALESCE(SUM(views), 0) as count FROM daily_stats').get() as {
		count: number;
	};
	return result.count;
}

// Cleanup old pageviews: aggregate to daily_stats, then delete
// Returns { aggregated: number, deleted: number }
export function cleanupOldPageviews(daysToKeep: number = 90) {
	const cutoffTime = Date.now() - daysToKeep * 24 * 60 * 60 * 1000;

	// First, aggregate old pageviews into daily_stats
	const aggregateStmt = db.prepare(`
    INSERT OR REPLACE INTO daily_stats (date, path, views)
    SELECT
      DATE(timestamp / 1000, 'unixepoch') as date,
      path,
      COUNT(*) as views
    FROM pageviews
    WHERE timestamp < ?
    GROUP BY date, path
  `);

	// Then delete the old pageviews
	const deleteStmt = db.prepare(`
    DELETE FROM pageviews WHERE timestamp < ?
  `);

	// Run as a transaction for safety
	const cleanup = db.transaction(() => {
		const aggregateResult = aggregateStmt.run(cutoffTime);
		const deleteResult = deleteStmt.run(cutoffTime);
		return {
			aggregated: aggregateResult.changes,
			deleted: deleteResult.changes
		};
	});

	return cleanup();
}

// Get database stats for monitoring
export function getDatabaseStats() {
	const pageviewCount = db.prepare('SELECT COUNT(*) as count FROM pageviews').get() as {
		count: number;
	};
	const dailyStatsCount = db.prepare('SELECT COUNT(*) as count FROM daily_stats').get() as {
		count: number;
	};
	const oldestPageview = db.prepare('SELECT MIN(timestamp) as oldest FROM pageviews').get() as {
		oldest: number | null;
	};
	const oldestDailyStat = db.prepare('SELECT MIN(date) as oldest FROM daily_stats').get() as {
		oldest: string | null;
	};

	return {
		pageviewRows: pageviewCount.count,
		dailyStatsRows: dailyStatsCount.count,
		oldestPageview: oldestPageview.oldest ? new Date(oldestPageview.oldest) : null,
		oldestDailyStat: oldestDailyStat.oldest
	};
}

export default db;
