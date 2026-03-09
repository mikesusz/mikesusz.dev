---
layout: '../layouts/StaticPage.astro'
title: 'Mike Susz Uses'
description: 'Information about the tools that I use'
---

This is about the software tools that I use.

## Code Editing

[Visual Studio Code](https://code.visualstudio.com/) is my primary development environment. I have the configuration synched across all my computers using [settings sync built into VSCode](https://code.visualstudio.com/docs/editor/settings-sync).

Theme: [HackTheBox](https://github.com/silofy/hackthebox) I love this, obviously as you can tell from the design of my website. I'm using [a fork of it] where I've made a few minor changes, including increasing the contrast between inactive items and the background (line numbers, tab titles) and added colors for the scroll thumb.

### Notable Extensions:

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) - language support for Astro
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - learn to code by making the squiggles go away
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - formatting everything consistently
- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) - good for viewing simple projects that don't create their own http server
- [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)- is a really cool extension that shows you the colors of css variables inline in your code
- [indent rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - makes a rainbow out of your indents. this is really useful for deeply nested files (like terrible html email templates)
- [indent rainbow palettes](https://marketplace.visualstudio.com/items?itemName=evondev.indent-rainbow-palettes) - a set of jazzy palettes for indent rainbow
- [peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) - changes the color of some of the chrome of VSCode. i find this super useful to have different colors for different projects, so when i have multiple windows open i can quickly figure out where each project is located.

here's a quick screenshot of my VSCode window:

![a screenshot of my VSCode window](/images/uses-code-editor.png)

## Terminal

My terminal of choice on a Mac is [iTerm2](https://iterm2.com/), it's brilliant and the creator/maintainer has [ways to support](https://iterm2.com/donate.html) them including a Patreon that I gladly contribute to.

When it comes to the shell inside, on my Mac I use [z shell](https://en.wikipedia.org/wiki/Z_shell), and [oh-my-zsh](https://ohmyz.sh/), with the [powerlevel10k theme](https://github.com/romkatv/powerlevel10k). Oh-my-zsh has plugins available to support a lot of different languages/environments, but I only load plugins for git and macos.

On my Windows computers I use [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701) which is also excellent and makes working on Windows feel more 'normal' to me. The HackTheBox theme that I use has been extended with a [HackTheBox colorscheme for vim](https://github.com/audibleblink/hackthebox.vim) which also provides a settings theme for Windows Terminal. Inside of Windows Terminal I use git-bash which is provided by [Git for Windows](https://gitforwindows.org/). (my employer's client does not allow the [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install), or else I would probably use that)

## Version Control

Nearly all of my projects use git for version control (most hosted either at [github](https://github.com/) or [Azure Devops](https://azure.microsoft.com/en-us/products/devops/repos)), and I do all of my interaction with git via a terminal. The git plugin for oh-my-zsh provides a lot of handy aliases for git, but I have some of my own that I've been using for years and built up a lot of muscle-memory around. You can find those in my somewhat-neglected [dotfiles repository](https://github.com/mikesusz/dotrepo).

## Knowledge Management

I'm a heavy user of [Obsidian](https://obsidian.md/) to keep track of projects and references for everything in my life. I even wrote an MCP server to make this info available to AI assistants.

## Assistants

I use Claude desktop and Claude Code for a lot of things now. While I'm not at the "let it churn in the background all day while I go do other stuff" stage, I am using desktop to organize and plan projects, while letting Claude Code do rote tasks or give me a first draft at things I've not built with yet.

I have Claude desktop integrated with a few MCP Servers I've written, including my publicly available [Obsidian MCP server](https://github.com/mikesusz/obsidian-mcp), and a custom server I wrote for my [Social feed website](https://feed.mikesusz.com).

Besides Claude, I also use Ollama to run local LLMs. Currently, I have qwen2.5:14b running in Ollama, connected to Continue.dev for coding questions.

## Deployment and Hosting

My professional work often involves large applications that are deployed at enterprise-scale. At one time or another I've worked on an app deployed at almost all of the major cloud providers: [AWS](https://aws.amazon.com/), [IBM Cloud](https://www.ibm.com/cloud), [Azure DevOps](https://azure.microsoft.com/en-us/products/devops).

Building and deploying Apps has varied also, my teams have used [Jenkins](https://www.jenkins.io/), [Travis ci](https://www.travis-ci.com/), and [Azure Pipelines](https://azure.microsoft.com/en-us/products/devops/pipelines). I'm usually not the deployment engineer, but I've looked under the hood and gotten to understand how these work and are configured.

For my personal projects, I previously used [Netlify](https://www.netlify.com/) for hosting javascript-based projects and/or sites built with javascript-based static site generators.

But now this site and many others are sourced in github, built and deployed using [Coolify](https://coolify.io/), onto a VPS from [Linode](https://linode.com). I think I have 20-ish sites serving from Coolify now.

Recently I've been doing more advanced stuff in Coolify, like persistent storage volumes and scheduled tasks. It makes it easy to do stuff that would formerly require, e.g. writing custom docker yaml files or editing crontabs.

## Browsers

In short, I use and test in all modern browsers (and a few not-so-modern ones). I believe that only testing your code in Chrome is a disservice to your users. Each has a specific purpose in my day-to-day work.

- [Chrome](https://www.google.com/chrome/) for development as I've come to enjoy the debugging and developer tools
- [Firefox](https://www.mozilla.org/en-US/firefox/new/) is the browser I use for work
- [Edge](https://www.microsoft.com/en-us/edge) is my primary browser on my personal PC
- [Safari](https://www.apple.com/safari/) I use for all my personal browsing on Mac/iPadOS/iOS

I will occasionally, as a minimum-common-denominator test, use [lynx](https://lynx.invisible-island.net/) to make sure my sites still work in a text-based browser. This isn't a requirement for any of my professional work, but I like to know that my personal sites are usable in as many scenarios as possible.

In addition to the built-in developer tools and things like [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview), my employer produces the [IBM Equal Access Toolkit](https://www.ibm.com/able/toolkit/) which you should check out.

--

As I think of other things I will update. Last update: March, 2026.
