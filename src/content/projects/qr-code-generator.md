---
title: 'QR Code Generator'
description: 'A free, no-spam, no-tracker, no-signup QR code generator.'
createdDate: 'October 2025'
status: 'active'
tags: ['javascript', 'css', 'html']
repoUrl: 'https://github.com/mikesusz/qr-sqd-co'
liveUrl: 'https://qr.sqd.co'
draft: false
---

## Overview

This project is a simple QR code generator that allows users to create QR codes from text input.

## Project Structure

```
qr-sqd-co
├── src
│   ├── index.html        # Main HTML document for the QR code generator interface
│   ├── main.js           # JavaScript code to handle QR code generation
│   ├── qrcode.js         # QRcode.js library https://github.com/davidshimjs/qrcodejs
│   └── styles.css        # Styles for the QR code generator interface
├── package.json          # Configuration file for npm
└── README.md             # Documentation for the project
```

## Getting Started

### Prerequisites

- A web browser to view the static site.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory

### Usage

1. Open `src/index.html` in your web browser.
2. Enter the text you want to convert into a QR code in the input field.
3. Click the "Generate QR Code" button to create the QR code.
4. The generated QR code will be displayed on the page.

### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

### License

This project is licensed under the MIT License.

### Backstory

This one is a simple tale of scratch-my-own-itch. QR codes are simple and powerful, but relatively obtuse to create on your own (by design - they're meant to be read by machines, not people). If you try to search for a free QR code generator, Google used to give you one inline, but they seemed to have stopped doing that recently. So all the linked websites for 'free' QR code generators are ... problematic, in different ways. I don't want to read your life story, I don't want to sign up for your newsletter, I don't want to dismiss your pop-up ads. I just want to generate a QR code from a string of text.

So I created a simple generator I can use at [qr.sqd.co](https://qr.sqd.co), and so can anyone else! Or, they can clone my repo and serve it from their own URL, or just load the index.html file in their browser. voila!
