---
title: "Don't Forget - You're Making Web Pages"
description: "The Web that was, how we lost our way, and how to fulfill our promise to The Future."
pubDate: '1 Aug 2024'
draft: false
---

![Don't Forget](/images/dont-forget.webp)

As I roll off of an intense assignment at work, I've got a bit of free brain space to reflect on the kind of work we've been doing, how we have done it, and how this affects -- _The Future._

(_about 15 minutes to read, unless you skip all the footnotes_ 😉)

## We have to go back...

In college, I spent a lot of time in computer labs. Since I was studying Architecture[^WIT] and this was the year 1991[^Nineties], this time was split between PCs running DOS[^DOS] with AutoCAD[^AutoCAD], and VT terminals[^VT220] where I used Pine[^Pine] to send emails to my brother and my friends at different schools (I can send as many messages as I want? to anyone? for free??)

![VT220](/images/DEC_VT220_terminal.webp)

Some time after my account on the VAX[^VAX] was created, I noticed a `'public_html'` directory appear inside my home directory. I asked the lab monitor what that was - and they explained I could put documents in there that could be be seen by other people on the web. (I can make as many web pages as I want? they can be seen by anyone? for free??)

My first 'homepage' was written with the vi[^VI] editor on a terminal. I usually viewed it (and any other web site I wanted to read) using Lynx[^Lynx].

I was hooked. I didn't know it at the time, but I would ultimately end up dropping out of the Architecture program, and be hired as the first full-time employee Webmaster[^Webmaster] of my college. But I'm getting ahead of myself.

So here I was, a late teen-turning-twenty-something, with interests and opinions. (they were probably not very good opinions, but that did not deter me.) I created web pages for all of the things i was excited about - TV Shows, Movies, Music. I wrote about my love of these things, I linked to other people's web pages (for free??) who shared the same interests.

Eventually, I started to notice `[INLINE]` markup in people's homepages. I asked my friendly lab monitor about that. I must have finally depleted their patience, as they sighed quietly and suggested I 'go check out the Mac[^Mac] lab.'

### When I first saw Mosaic, everything changed

![Screenshot of Mosaic browser](/images/NCSA_Mosaic_Browser_Screenshot.webp)

Mosaic[^Mosaic] changed everything for me when I realized that it was possible to embed images, and to add _style_ to your web pages (beyond the **bold** and _italic_ that I had managed to render in Lynx). I was an Architecture student, and my interests in design dovetailed into industrial and graphic design also. Having more control over the presentation of my content appealed to me greatly.

### You can make (almost) anything you want

So while learning new and different ways to affect the display of my web pages, there was always a retropective step -- "Does this still work in Lynx?" Why would we care so much? **We refused to sacrifice access to our content in the pursuit of something new and shiny.** We always checked in other/older browsers.

**We hand-wrote HTML.** The code that we typed was the exact markup being parsed by the browser. If you saved an HTML document from the web, and opened it up in your text editor right next to your source-code, they would be identical.

This is basic to some of us, but perhaps revelatory to others. And maybe even preposterous to others, still. But this was important, for several reasons.

We cared about the final markup because we were building something to be consumed now _and in perpetutity_. Web browsers were new, and new ones were being invented all the time. These were not only copycats of functionality with a different wrapper, they were _different types of interaction_ with the content we were producing. Lynx was text-only. Mosaic (and Netscape Navigator[^NN] and Opera[^Opera] and Internet Explorer[^IE] and even Cyberdog[^Cyberdog] and others[^Others]!) were graphical. What was next? 3D[^3D]?

We never assumed what was next. Or, more specifically -- **we never assumed that what would come next would be identical to what we had now**. It was easy to see a future where our content would be consumed via (something) that hadn't been invented yet. And for the most part, we were correct. Eventually we got Web Spiders[^Spiders] and Search Engines[^SE] and Indexes[^Indexes]. We got mobile phones with WAP[^WAP] browsers that would display a pared-down version of our content.

How could we ensure that our content would be readable using technology that hasn't been invented yet?

### Standards

![Developers - Standards - Browsers](/images/developers-standards-browsers.webp)

So much of what I learned early on was by viewing the source of other websites, changing my markup, reloading. We were just about to get the O'reilly HTML[^HTML] book. Plus the mid-1990s gave us WebMonkey[^WebMonkey] and of course the W3C[^W3C]. By now, (most of)[^Layer] the browser makers were creating engines to render standard HTML, so we began writing standard HTML.

Our hope was that, as long as the (consumer side) of the agreement was planning on rendering content based on web standards, that we would produce content to the same specification. We met in the middle. The code I write today, as long as it is _valid_, should be readable both in the browsers and consumption methods we've already produced, as well as any compliant method that should come in the future.

As time went on, our focus evolved to not only writing _standard_ HTML, but to use it _properly_. The early 2000s saw a Renaissance[^DWS] of this explicit focus, wherein we re-commited to using standard HTML elements _semantically_. This ensured that (wait for it) browsers and other parsers could determine the _meaning_ and _intention_ of how we organize our content with markup, rather than everything-is-a-div (or a table[^Tables]).

## Back ... to The Future!

My biggest concern about the future is -- am I the only one who is concerned about _The Future?_ This might sound like a small thing, but it's a big thing.

A lot of the technology we've added to the modern UI development stack is intended to make the _developer experience_ better - to help us to write "better" software, faster. I use the term _software_ here because in terms of complexity, that's what we're making.

The practitioners of today have learned about web development in Computer Science curriculums, where they also learned about (compilers, object-oriented languages, databases, etc.). They are conditioned to write _software_.

### And the outlook is ... not great

Increasing functionality on the web will necessarily require increasingly complex code. I understand this. And technology-wise, the average device that our audience is using has more capability to parse and understand it than the simple machines that I began using (as long as you have signal and bandwidth). But lately what I've been seeing disgorged into the browser DOM is not commensurate with this escalation.

I've accepted that libraries and shared components are necessary for modern web development. The days of twee artisanal hand-crafted top-to-bottom websites are probably over (at least, outside of hobbyist pursuits).

I'm not arguing that we should reload and view the built source that is served to the browser with every saved change, read it thoroughly and make sure it's valid. This would be taxing, and the incremental benefit would not justify the time and expense. But we should do what we can to assure that it is **valid and only as complex as it needs to be.** Remember, we are still honoring that unwritten agreement between developers and browsers and 🦋.

This is especially important if we are the ones creating libraries, components, and design systems that will be re-used. Our consumers and ultimately their users are relying on us to have put in the dilligence to make sure that are honoring this agreement with all possible _Future(s)_.

But mike - we are time-constrained. Sprint deliverables, deadlines, launch dates. This is true, but we have development tools that can help.

### We have the technology

![Stop it. Get some help.](/images/get-some-help.webp)

There are tools to help[^Tools]. We have reference websites for CSS browser compatibility. We have linters that can check the built output of our websites. We have browser dev tools and extensions that can parse for validity and accessibility. We have automated testing frameworks that can render our code and interact with it sight-unseen, and report any difficulties they encounter.

Perhaps most importantly, we have development servers that can hot-reload web _browsers_ when you save changes to documents. I said browsers with an **S** on the end - how wonderous it is to save a document and see it refresh in a variety of windows / devices / sizes / shapes!

More to my point: **"it looks good in Chrome" is not acceptable** as your sole success criteria.

If that is how you develop, you are not only _abandoning your promise to the Future_, but you're also _ignoring your responsibility to the Present_.

### We have to make the choice

![Red Pill or Blue Pill](/images/Red_and_blue_pill.webp)

Doing the right thing is a conscious choice. With the pressure we get in our jobs, it's difficult to justify the time and effort to business people who don't 'get it' and just want the tickets closed as quickly as possible.

So we spend time optimizing our tools and our workflows to be fast. We need to also optimize our tools and our workflows to do the right thing.

We are the only ones who can advocate for our code, our users, and _The Future_. So extend your cleverness with tooling and optimization (or even your manual routines) to help you create something that will endure.

like Merlin Mann often [says](https://github.com/merlinmann/wisdom/blob/master/wisdom.md) (attributed to Jeff Veen), **make the right thing the easy thing.**

## Summary

![Old Man Yells at Cloud](/images/yells-at-cloud.webp)

I didn't write all this to yell at you. (no, really). I implore you to think about the _Future_ in what you build. This was inherent in my journey when I started. I'm not sure where we strayed from this focus.

Maybe newer developers view this as a **Career**. When I started out, it was a **Frontier**.

### Takeaways, or TL;DR:

- refuse to sacrifice access to your content in the pursuit of something new and shiny
- develop to standards and use html elements for what they're semantically designed for
- strive to produce code that is valid and _only as complex as it needs to be_
- broadly test on all available browsers and devices
- consider the baseline of access - maybe not Lynx, but at least account for common problems that thwart and frustrate users[^Common]
- check your work with browser extensions like lighthouse &amp; others

### And, Ultimately:

**Consider that what we create may outlast our membership on a team, our employment at a company, the browsers that people are using today, or even survive longer than _us._**

_The Future_ is counting on you to do the right thing.

[^WIT]: I began the Architecture program at Wentworth Institute of Technology in 1991. This was the precise time where we started transitioning from paper drawing to Computer Aided Design (CAD) - about half my courses still drew manually (pencils, t-squares, triangles, scales) and half were CAD.
[^Nineties]: 1991, or as my kids would call it "the late nineteen-hundreds."
[^DOS]: While early versions of Microsoft Windows were available, MS DOS 3.1 and subsequent releases were much cheaper, and a lot of expensive vertical-market software was not compatible with Windows anyway (you could click on an icon in Windows to launch them, and they would abruptly exit windows and load the DOS-based application full screen, without the ability to switch back and forth).
[^AutoCAD]: At this time, [AutoCAD for DOS](https://en.wikipedia.org/wiki/AutoCAD_version_history) was far more performant, and I built up quite a muscle-memory for its specific hotkeys. This is the first, probably, in a long list of things that I mastered, and then through updates and the passage of time, became abruptly irrelevant. AutoDesk still makes [AutoCAD](https://www.autodesk.com/products/autocad/overview), having gone through many revisions, to become somewhat of a juggernaut of software to serve not only 2-dimensional and 3-dimensional drawing and modeling, but a new genre of software called Building Information Modeling (BIM). This makes it too expensive for me to tinker with anymore, sadly.
[^VT220]: Wentworth had several labs of [VT220](https://en.wikipedia.org/wiki/VT220) terminals. I usually gravitated toward the ones with Amber colored displays.
[^Pine]: [Pine](<https://en.wikipedia.org/wiki/Pine_(email_client)>) was an early terminal-based email program, I don't recall but I may have actually started using [Elm](<https://en.wikipedia.org/wiki/Elm_(email_client)>) in my first year of college. The administrators would usually create an alias ([symbolic link](https://en.wikipedia.org/wiki/Symbolic_link)) for common functionality, so users could either choose 'mail' from a login menu, or type 'mail' in a command shell to be taken to (whatever the configured mail client was at the time)
[^VAX]: Wentworth had two Digital Equipment Corporation VAX systems, though I do not recall the specific models. The system for staff &amp; faculty was called 'Bert' while the system for students was named 'Ernie.' I never found out who was responsible for that naming.
[^VI]: While I am not one of the 'I still code in [vi](https://www.vim.org/)' people, a lot of whom I know and respect, I did use it a lot for coding back then, and I still use it now for editing shell scripts and config files, especially, obviously, when working on a remote server.
[^Lynx]: [Lynx](https://lynx.invisible-island.net) and [Links](<https://en.wikipedia.org/wiki/Links_(web_browser)>) are somewhat conflated in my mind, and I'm sure I used them interchangably at various times
[^Webmaster]: Webmaster was the term used in acadamia to refer to the person in charge of the organization's web presence. I'm not entirely sure of the etymology, it calls to mind Dungeons and Dragons ("Dungeon Master") but ultimately dwindled in usage, to be replaced by more familiar designer / developer /engineer titles. Though at the time, it was much more encompassing -- I maintained the hardware and software of the web server, in addition to developing content. The 'full stack' started with the computer under my desk (no, really, when I was hired - the web server was the computer under my desk. I moved it to the server room.)
[^Mac]: The Mac labs at Wentworth in the early 90s were Macintosh Quadra [700](https://en.wikipedia.org/wiki/Macintosh_Quadra_700) and [800](https://en.wikipedia.org/wiki/Macintosh_Quadra_800).
[^Mosaic]: [NCSA Mosaic](https://en.wikipedia.org/wiki/NCSA_Mosaic) was the first widely-used graphical browser for the web, followed very quickly by the rest of this list. Wired does well to capture its impact [in this article](https://www.wired.com/2010/04/0422mosaic-web-browser/)
[^NN]: [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator) very quickly followed Mosaic and was pretty good, until they really pushed for you to download it in a package called 'Netscape Communicator' that combined email and calendars and ... people didn't like it.
[^Opera]: [Opera](<https://en.wikipedia.org/wiki/Opera_(web_browser)>) had always been a dark-horse contender in my mind, but consistent.
[^IE]: [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer), when new, was actually quite good. Even the [Mac version](https://en.wikipedia.org/wiki/Internet_Explorer_for_Mac), which would eventually become bundled with Mac OS (via large investment in Apple by Microsoft) was quite good at the time.
[^Cyberdog]: [Cyberdog](https://en.wikipedia.org/wiki/Cyberdog) was a very short-lived browser by Apple. I was very excited about Cyberdog and [OpenDoc](https://en.wikipedia.org/wiki/OpenDoc) in general, both of which went away very quickly. It probably only gets mentioned here due to my misplaced enthusiasm.
[^Others]: I'm leaving so many out of this list, or else this post would be even more egregiously long. So many. Really you should read through a lot of wikipedias history of web browsers to get a feel for just how much the landscape was broadening and changing beneath our feet. [History of the web browser](https://en.wikipedia.org/wiki/History_of_the_web_browser) and [List of web browsers](https://en.wikipedia.org/wiki/List_of_web_browsers) are good places to start.
[^3D]: No, really, we thought that [VRML](https://en.wikipedia.org/wiki/VRML) and [3D browsing](https://en.wikipedia.org/wiki/Web3D) might take off. Hey, it still might!
[^Spiders]: The original indexes of the web started out as private, or local, link-by-link indexes of web pages as they were [crawled](https://en.wikipedia.org/wiki/Web_crawler) and added to a database. Some of these databases had public interfaces where you could search for topics - at first you had to be very specific about keywords and the syntax that you used, as they did not have fuzzy matching or word stemming or natural language processing. This also meant that when developing, you had to be very explicit to define what your web page was about, if you hoped that people would find it. I remember the day that i first saw my website in [WebCrawler](https://en.wikipedia.org/wiki/WebCrawler)
[^SE]: Search Engines that were developed as commercial tools were built when companies began to realize that discoverability on the web was something that could be productized and monetized. Back then, it felt a lot less creepy than it does now - the technology didn't yet exist to target individual users specifically, it was all based on aggregated data. As new search engines were developed and their functionality increased, we (users) hopped from engine to engine.
[^Indexes]: Curated indexes probably became too labor intensive to maintain, but [DMOZ](https://en.wikipedia.org/wiki/DMOZ) was excellent and even [Yahoo Directory](https://en.wikipedia.org/wiki/Yahoo!_Directory) was a tremendous thing.
[^WAP]: In the days before smartphones, the mobile phone data landscape was sparse. [WAP](https://en.wikipedia.org/wiki/Wireless_Application_Protocol) was a promising development, but device capabilities and network capacity expanded quickly enough that WAP became unnecessary. thankfully. It was rough, y'all.
[^HTML]: "HTML: The Definitive Guide" was first published in April of 1996. Feeling nostalgic? [Check it out on archive.org](https://archive.org/details/htmldefinitivegu00musc_0). I'm not sure when I picked up my copy, but I know it spent many years on my desk and in my backpack.
[^WebMonkey]: [WebMonkey](https://en.wikipedia.org/wiki/Webmonkey) was an excellent resource for cutting-edge markup on the web. It had the style and swagger of [Wired Magazine](https://www.wired.com) and their other properties like [HotWired](https://en.wikipedia.org/wiki/HotWired). A better write-up of its history and ultimate demise [here at Wired](https://www.wired.com/2004/02/webmonkey-rip-1996-2004/)
[^W3C]: The [W3C](https://www.w3.org/) was always there, and felt like a stable presence to counter the interests of corporate groups who were pushing for the web to be siloed and controlled.
[^Layer]: For a while Netscape tried to make their own DOM, but eventually relented, [Jeffrey Zeldman himself has the details of that here](https://alistapart.com/article/bullet/).
[^DWS]: [Designing with Web Standards](https://en.wikipedia.org/wiki/Designing_with_Web_Standards) became the guide and the justification for shifting to Semantic markup. It also helped that CSS was evolving and allowing us to create complex layouts properly.
[^Tables]: For some time in the late 90s, web standards and browsers just couldn't keep up with the demands of marketing and designers and corporations. Before advanced web layouts were possible with CSS, we improperly used data tables for layout. I actually got very good at this, then I stopped. If you need a great example (not my work) you can check out the famous [Space Jam website](https://www.spacejam.com/1996/). If you want to see my work, here's a [copy of my website from 1996](http://mikesusz.com/sitemuseum/1996/) (resize your browser - it's _responsive!_)
[^Tools]: Tools I use every day: [MDN](https://developer.mozilla.org/en-US/), [Can I Use](https://caniuse.com/), [Lighthouse in Chrome Dev Tools](https://developer.chrome.com/docs/lighthouse/overview), [IBM Equal Access Toolkit/checker](https://www.ibm.com/able/toolkit), all the stuff I talked about [on my Uses page](/uses)
[^Common]: Common problems that thwart or frustrate users are probably things you're familiar with: "oops this script didn't load" or "oops that tracking gif didn't load" or "oops there was a javascript error" does your website still... function? Have you experienced this as a user, how did it make you feel?

---

## Image Credits:

- "Don't Forget" graphic is a parody that I made from a frame of the TV show [The Simpsons "And Maggie Makes Three" Season 6, Episode 13](https://simpsonswiki.com/wiki/And_Maggie_Makes_Three). Original airdate: January 22, 1995
- VT220 image from Tom Page via [Wikimedia](https://commons.wikimedia.org/wiki/File:DEC_VT220_terminal.jpg)
- Screenshot of Mosaic browser by Charles Severance, via [Wikimedia](https://commons.wikimedia.org/wiki/File:NCSA_Mosaic_Browser_Screenshot.png)
- Developers 🤝 Browsers graphic was made on [imgflip.com](https://imgflip.com) 'Epic Handshake' meme generator. (The original frame is a painting-like rendition of a scene from the film _Predator_, the actors being depicted handshaking are Carl Weathers and Arnold Schwarzenegger, respectively)
- "Stop it. Get some help" image is a meme now, but it was originally from an anti-drug Public Service Announcement from 1987 starring Michael Jordan
- Red Pill / Blue Pill image by W.carter, via [Wikimedia](https://commons.wikimedia.org/wiki/File:Red_and_blue_pill.jpg). This is a reference to a film called _The Matrix_, from the late nineteen-hundreds
- "Old Man Yells at Cloud" image is from [The Simpsons, Season 13 Episode 13 "The Old Man and the Key"](https://simpsonswiki.com/wiki/The_Old_Man_and_the_Key)

---
