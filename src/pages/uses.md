---
layout: "../layouts/StaticPage.astro"
title: "Mike Susz Uses"
description: "Information about the tools that I use"
---

This is about the software tools that I use.

## Code Editing

[Visual Studio Code](https://code.visualstudio.com/) is my primary development environment. I have the configuration synched across all my computers using [settings sync built into VSCode](https://code.visualstudio.com/docs/editor/settings-sync)

Theme: [HackTheBox](https://github.com/silofy/hackthebox) I love this, obviously as you can tell from the design of my website. I'm using [a fork of it] where I've made a few minor changes, notably increasing the contrast between inactive items and the background (line numbers, tab titles) and added colors for the scroll thumb.

Notable Extensions:

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) - Language support for Astro
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - learn to code by making the squiggles go away
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - formatting
- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) - good for viewing simple projects that don't create their own http server
- [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)- is a really cool extension that shows you the colors of css variables inline in your code
- [indent rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - makes a rainbow out of your indents. this is really useful for deeply nested files (like terrible html email templates)
- [indent rainbow palettes](https://marketplace.visualstudio.com/items?itemName=evondev.indent-rainbow-palettes) - a set of jazzy palettes for indent rainbow
- [peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) - changes the color of some of the chrome of VSCode. i find this super useful to have different colors for different projects, so when i have multiple windows open i can quickly figure out where each project is located.
- [Github Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) - AI powered pair-programmer, I have been finding this useful for syntax auto-completion where I might normally get caught up in small formatting errors. I haven't yet used it for creating new projects, I'm not comfortable with outsourcing 'big' things.

## Terminal

My terminal of choice on a Mac is [iTerm2](https://iterm2.com/), it's brilliant and the creator/maintainer has [ways to support](https://iterm2.com/donate.html) them including a Patreon that I gladly contribute to.

When it comes to the shell inside, on my Mac I use [z shell](https://en.wikipedia.org/wiki/Z_shell), and [oh-my-zsh](https://ohmyz.sh/), with the [powerlevel10k theme](https://github.com/romkatv/powerlevel10k). Oh-my-zsh has plugins available to support a lot of different languages/environments, but I only load plugins for git and macos.

On my Windows computers I use [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701) which is also excellent and makes working on Windows feel more 'normal' to me. The HackTheBox theme that I use has been extended with a [HackTheBox colorscheme for vim](https://github.com/audibleblink/hackthebox.vim) which also provides a settings theme for Windows Terminal. Inside of Windows Terminal I use git-bash which is provided by [Git for Windows](https://gitforwindows.org/). (my employer's client does not allow the [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install), or else I would probably use that)

## Version Control

Nearly all of my projects use git for version control (most hosted either at [github](https://github.com/) or [Azure Devops](https://azure.microsoft.com/en-us/products/devops/repos)), and I do all of my interaction with git via a terminal. The git plugin for oh-my-zsh provides a lot of handy aliases for git, but I have some of my own that I've been using for years and built up a lot of muscle-memory around. You can find those in my somewhat-neglected [dotfiles repository](https://github.com/mikesusz/dotrepo).

## Deployment and Hosting

My professional work often involves large applications that are deployed at enterprise-scale. At one time or another I've worked on an app deployed at almost all of the major cloud providers: [AWS](https://aws.amazon.com/), [IBM Cloud](https://www.ibm.com/cloud), [Azure DevOps](https://azure.microsoft.com/en-us/products/devops).

Building and deploying Apps has varied also, my teams have used [Jenkins](https://www.jenkins.io/), [Travis ci](https://www.travis-ci.com/), and [Azure Pipelines](https://azure.microsoft.com/en-us/products/devops/pipelines). I'm usually not the deployment engineer, but I've looked under the hood and gotten to understand how these work and are configured.

For my personal projects, I still have a VPS (Virtual Private Server) that hosts a few things (as well as providing me a remote shell to use when I need it). Recently started using Netlify for hosting javascript-based projects and/or sites built with javascript-based static site generators. This site itself is an Astro site, hosted in github, and deployed via Netlify.

The deploy pipeline for Netlify is probably the way I'm migrating towards in the future -- it's just so easy to have a github hosted repository and configure a Netlify site to build from it.

## Browsers

In short, I use and test in modern browsers (and a few not-so-modern ones). I believe that only testing your code in Chrome is a disservice to your users. Each has a specific purpose in my day-to-day work.

- [Chrome](https://www.google.com/chrome/) for development as I've come to enjoy the debugging and developer tools
- [Firefox](https://www.mozilla.org/en-US/firefox/new/) is my primary browser for work (IBM) use
- [Edge](https://www.microsoft.com/en-us/edge) is my primary browser on my personal PC
- [Safari](https://www.apple.com/safari/) I use for all my personal browsing on Mac/iPadOS/iOS.

I will occasionally, as a litmus test, use elinks or lynx to make sure my sites still work in a text-based browser. This isn't a requirement for any of my professional work, and quite a few of the sites I build for work aren't able to load in them, but for my personal sites I still check.

--

As I think of other things I will update.


