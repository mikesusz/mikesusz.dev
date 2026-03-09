---
title: 'Time Calculator'
description: 'A fun calcuator to see the number of days between today and a date in the past -- then the same span beyond that!'
createdDate: 'Dec 2025'
status: 'active'
tags: ['typescript', 'javascript', 'css', 'html']
repoUrl: 'https://github.com/mikesusz/time-sqd-co'
liveUrl: 'https://time.sqd.co'
draft: false
---

A small SPA to calculate and display time differences between dates. The UI lets you enter a past date (defaults to 2000‑01‑01) and shows the days between that date and today along with a symmetrical "equal days before" date.

## Quick start

Prerequisites

- Node.js (14+ recommended)
- npm or yarn

Install and run

```bash
# install
npm install

# dev server
npm run dev

# build for production
npm run build

# preview production build
npm run serve
```

## Project layout (important files)

- package.json — project metadata and scripts.
- index.html — Vite entry (loads `/src/main.tsx`).
- src/main.tsx — React entry; mounts the app.
- src/App.tsx — top-level component; holds the targetDate state (defaults to Jan 1, 2000) and passes it into TimeDisplay.
- src/components/TimeDisplay.tsx — main UI: shows pastTime, today, difference in days and includes the inline date input (date picker). Exposes `onPastDateChange?: (date: Date) => void` to update the parent state.
- src/styles/app.css — application styles (controls layout, centering and sizing).
- .gitignore — ignores node_modules.

## Behavior / notes

- Default target/past date: Jan 1, 2000.
- The inline date input uses a local edit string to avoid clobbering user typing mid-edit; commits to parent only when the browser reports a complete date or on blur.
- valueAsDate / UTC handling: the app normalizes date inputs using UTC getters to avoid timezone-induced off-by-one-day issues.
- Time formatting: dates rendered as short month (e.g. "Jan 1, 2000").

## License

MIT

## Backstory

I heard Merlin Mann describe "chron-analogy" — the idea that our sense of how distant the past feels is relative to our own experience. I wanted to feel the math. Enter a date that feels recent. See how many days have elapsed. Then look at the symmetrical date on the other side — the same distance further back in time. Example: Nirvana's Nevermind came out 12,585 days ago. The equal distance before that release? April 1957. Elvis was on top of the charts. That's the tool working exactly as intended.

I'm sorry if it makes you feel old. It does the same for me sometimes.
