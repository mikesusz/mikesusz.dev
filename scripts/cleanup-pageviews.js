#!/usr/bin/env node

/**
 * Cleanup script for pageviews database
 *
 * Aggregates pageviews older than 90 days into daily_stats table,
 * then deletes the individual records.
 *
 * Usage:
 *   node scripts/cleanup-pageviews.js [days-to-keep]
 *
 * Example cron (run weekly on Sunday at 3am):
 *   0 3 * * 0 cd /app && node scripts/cleanup-pageviews.js >> /app/data/cleanup.log 2>&1
 */

import Database from 'better-sqlite3';
import { existsSync } from 'fs';

const DAYS_TO_KEEP = parseInt(process.argv[2]) || 90;
const DATA_DIR =
	process.env.DATA_DIR || (process.env.NODE_ENV === 'production' ? '/app/data' : './data');
const DB_PATH = `${DATA_DIR}/pageviews.db`;

console.log(`[${new Date().toISOString()}] Starting pageview cleanup...`);
console.log(`  Database: ${DB_PATH}`);
console.log(`  Keeping: ${DAYS_TO_KEEP} days of detailed data`);

if (!existsSync(DB_PATH)) {
	console.log('  Database does not exist yet. Nothing to clean up.');
	process.exit(0);
}

const db = new Database(DB_PATH);

// Ensure daily_stats table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS daily_stats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    path TEXT NOT NULL,
    views INTEGER NOT NULL,
    UNIQUE(date, path)
  );
  CREATE INDEX IF NOT EXISTS idx_daily_stats_date ON daily_stats(date);
`);

const cutoffTime = Date.now() - DAYS_TO_KEEP * 24 * 60 * 60 * 1000;
const cutoffDate = new Date(cutoffTime).toISOString().split('T')[0];

console.log(`  Cutoff date: ${cutoffDate}`);

// Get count before cleanup
const beforeCount = db
	.prepare('SELECT COUNT(*) as count FROM pageviews WHERE timestamp < ?')
	.get(cutoffTime);
console.log(`  Records to process: ${beforeCount.count}`);

if (beforeCount.count === 0) {
	console.log('  No old records to clean up.');
	db.close();
	process.exit(0);
}

// Aggregate old pageviews into daily_stats
const aggregateStmt = db.prepare(`
  INSERT OR REPLACE INTO daily_stats (date, path, views)
  SELECT
    DATE(timestamp / 1000, 'unixepoch') as date,
    path,
    COALESCE(
      (SELECT views FROM daily_stats WHERE date = DATE(timestamp / 1000, 'unixepoch') AND path = pageviews.path),
      0
    ) + COUNT(*) as views
  FROM pageviews
  WHERE timestamp < ?
  GROUP BY date, path
`);

// Delete old pageviews
const deleteStmt = db.prepare('DELETE FROM pageviews WHERE timestamp < ?');

// Run as transaction
const cleanup = db.transaction(() => {
	aggregateStmt.run(cutoffTime);
	const deleteResult = deleteStmt.run(cutoffTime);
	return deleteResult.changes;
});

try {
	const deleted = cleanup();
	console.log(`  Deleted: ${deleted} pageview records`);

	// Vacuum to reclaim space
	console.log('  Running VACUUM...');
	db.exec('VACUUM');

	// Show final stats
	const pageviewCount = db.prepare('SELECT COUNT(*) as count FROM pageviews').get();
	const dailyStatsCount = db.prepare('SELECT COUNT(*) as count FROM daily_stats').get();

	console.log(`  Final stats:`);
	console.log(`    - Pageview records: ${pageviewCount.count}`);
	console.log(`    - Daily stats records: ${dailyStatsCount.count}`);
	console.log(`[${new Date().toISOString()}] Cleanup complete!`);
} catch (err) {
	console.error('  Error during cleanup:', err);
	process.exit(1);
} finally {
	db.close();
}
