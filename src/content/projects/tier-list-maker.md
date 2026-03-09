---
title: 'Tier List'
description: 'A free tier list maker you can run locally'
createdDate: 'Jan  2026'
status: 'active'
tags: ['javascript', 'css', 'html']
repoUrl: 'https://github.com/mikesusz/tier-sqd-co'
liveUrl: 'https://tier.sqd.co'
draft: false
---

# Tier List Maker

A simple, self-hosted tier list app. No ads, no tracking, runs entirely in your browser.

Perfect for streamers, content creators, or anyone who wants to make tier lists without the bloat.

## Features

- **Drag & Drop** - Easily move items between tiers
- **Image Upload** - Add your own images via drag-drop or file picker
- **Customizable Tiers** - Add, remove, rename, and recolor tiers
- **Auto-Save** - Your progress is saved automatically to your browser
- **Export Options**
  - Save as PNG image for sharing
  - Export/import JSON data for backup

## Quick Start

1. Clone this repository or download the files
2. Open `index.html` in your browser
3. Start adding images and building your tier list!

```bash
git clone https://github.com/mikesusz/tier-sqd-co.git
cd tier-sqd-co
open index.html  # or just double-click the file
```

## Hosting on GitHub Pages

1. Fork this repository
2. Go to Settings > Pages
3. Set source to "Deploy from a branch"
4. Select `main` branch and `/ (root)` folder
5. Your tier list maker will be live at `https://yourusername.github.io/tier-sqd-co`

## Usage

### Adding Images

- Click the upload zone or drag files directly onto it
- Supports common image formats (PNG, JPG, GIF, etc.)

### Organizing Tiers

- Drag images from the gallery to any tier
- Drag images between tiers to reorganize
- Drag images back to the gallery to unrank them

### Editing

- **Click a tier label** to rename it or change its color
- **Double-click an image** to edit its label or delete it
- **Click "+ Add Tier"** to create a new tier

### Exporting

- **Save as Image** - Downloads your tier list as a PNG
- **Export Data** - Saves all data as JSON (including images)
- **Import Data** - Restore from a previously exported JSON file

### Clearing

- **Clear All** resets everything to default (with confirmation)

## Privacy

All data stays in your browser. Images are stored as base64 data URLs in localStorage. Nothing is sent to any server.

## Tech Stack

- Vanilla HTML/CSS/JavaScript
- [SortableJS](https://sortablejs.github.io/Sortable/) for drag-and-drop
- [html2canvas](https://html2canvas.hertzen.com/) for PNG export

## License

MIT - Do whatever you want with it!

## Backstory

Another solve-my-own-problem project. My kids wanted to make a 'tier list' and all the 'free' websites to make them require you to sign up for something, ot look at tons of ads. Not great, especially if you're going to be streaming this on twitch or youtube. So I made one that you can run locally in your browser.
