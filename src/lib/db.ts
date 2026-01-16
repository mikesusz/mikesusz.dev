import Database from 'better-sqlite3';
import { existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// Use /app/data in production (Coolify), fall back to local ./data in development
const DATA_DIR = process.env.DATA_DIR || (process.env.NODE_ENV === 'production' ? '/app/data' : './data');
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
  return db.prepare(`
    SELECT path, COUNT(*) as views
    FROM pageviews
    GROUP BY path
    ORDER BY views DESC
    LIMIT 50
  `).all() as PageViewStats[];
}

// Get daily pageviews for the last N days
export function getDailyPageViews(days: number = 30): DailyStats[] {
  const cutoffTime = Date.now() - (days * 24 * 60 * 60 * 1000);

  return db.prepare(`
    SELECT
      DATE(timestamp / 1000, 'unixepoch') as date,
      COUNT(*) as views
    FROM pageviews
    WHERE timestamp >= ?
    GROUP BY date
    ORDER BY date DESC
  `).all(cutoffTime) as DailyStats[];
}

// Get recent pageviews
export function getRecentPageViews(limit: number = 100) {
  return db.prepare(`
    SELECT path, referrer, timestamp, created_at
    FROM pageviews
    ORDER BY timestamp DESC
    LIMIT ?
  `).all(limit);
}

export default db;
