---
title: 'Social Feed'
description: 'A complete, ongoing lifestream of all my Social Media posts.'
createdDate: 'March 2026'
status: 'active'
tags: ['astro', 'typescript', 'javascript', 'css', 'sqlite', 'mcp']
liveUrl: 'https://feed.mikesusz.com'
draft: false
---

A searchable archive of 15,226 posts across Twitter, Mastodon, and Bluesky (April 2008 - present). Auto-syncs daily via scheduled tasks.

## Features

- Full-text search with FTS5 across 18 years of posts
- Unified timeline view across three platforms
- Thread context preservation
- Video/image media support with range request streaming
- MCP server for AI assistant integration
- Bearer token authentication

## Tech Stack

**Frontend:**

- Astro 5 (SSR mode)
- TypeScript
- CSS

**Backend:**

- SQLite with FTS5 for full-text search
- better-sqlite3 for database access
- Node.js HTTP server for media streaming

**Infrastructure:**

- Coolify (Docker deployment)
- Persistent storage volumes for database + media
- Scheduled tasks for automated sync (Mastodon + Bluesky APIs)
- Nixpacks build process

**MCP Server:**

- Model Context Protocol (stdio + HTTP transports)
- @modelcontextprotocol/sdk
- Zod for schema validation
- Bearer token authentication

## Architecture

Monorepo structure with npm workspaces:

```
packages/
  shared/       # Database layer, types
  web/          # Astro SSR frontend
  mcp-server/   # MCP tools (search_posts, get_post, get_stats)
scripts/        # Import scripts (Twitter, Mastodon, Bluesky)
data/           # SQLite database + media files
```
