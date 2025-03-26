---
title: "Coolify Setup"
description: "My adventures with moving to(ward) automated self-hosting."
pubDate: "26 Mar 2025"
draft: true
---

In the way that internet things sometimes come full-circle, I wanted to move my web hosting back to machines that I control. Here's the story of my journey doing that, and a few pointers to avoid the pitfalls that I fell into.

If you want to skip the preamble and get right to the Coolify comments, [jump to the end](#enter-coolify)

<!-- a history of my web hosting -->

## Let's start at the beginning

Well, no, let's not spend too much time dwelling on this. When I started publishing web pages, as you can read about in more detail in [other blog posts](/blog/dont-forget), it involved having a `public_html` directory on a Unix machine. This heavy iron was usually provided by a college or an employer (or both). This was not super convenient, but generally I edited the files in place, or edited them locally and FTP[^ftp]'d them up. (passwords flying around in plain text? the internet used to be WILD y'all)

<!-- shared hosting - better, but not ideal -->

## No longer free

When I left academia I needed to find my own paid web hosting, and this is the longest era in the history I'm recounting today. The names change as prices change and bundled features change, but they're generally all the same. A big shared server where you and several (many?) other customers upload your files and one box serves them all. As long as everyone doesn't get slashdotted[^slashdot] all at once, This metal can usually handle the load of having so many domains pointing at it.

<!-- h4x0rZ -->

But this situation is fraught. On several occasions, shared hosting servers that I had my websites on were hacked, and even my own sites were not immune. Typically this happens when a web host allows shell logins and an unscrupulous user can traverse directories, trying to find one that someone flagged with the wrong permissions (specifically - allowing _any_ user on the system to *write* files as opposed to just *read*ing them).

All a h4x0r had to do was copy a .php file through the local filesystem into _your_ directory, then hit it from the web, and bingo! They were executing their own code via _your_ website, with _your_ user and _your_ permissions, allowing them to do mean things to _your_ WordPress database and basically cause you headaches for days/weeks/months. (Yes, I was both the victim of this, and spent a lot of time cleaning it up, and ... was a consultant cleaning this up for other people/companies)

<!-- automated build and deploy platforms - nice -->

## Moving away from dynamics

One way to thwart these kinds of vulnerabilities is for the website itself to be immutable. This is kind of like how we did things early on (edit static files) in that it doesn't rely on executing code to build webpages from templates + content from a database. You can still create content quickly, writing the content section of new blog posts or pages using local editors, but then running a build process to generate the final assets of the site -- Static Site Generation tools arose that satisfied our need for (near) immediacy, but didn't rely on just-in-time compiled web pages that had performance and security implications.

<!-- Why not automate ALL THE THINGS -->

## The Cart and the Horse

So running build tools on your local machine to generate a static website and upload it to the server was neat, but why don't we cut out the middleman? Your code is in a remote repository (probably GitHub) your website is on a shared or cloud hosted server somewhere, all we need is to run that build _in the cloud_ also, and we no longer have to do it locally (which sometimes had its own problems depending on your local platform, and other boring issues).

Enter services like the one I used previously, [Netlify](https://www.netlify.com/). I can't say anything bad about them, it's a great service. You connect it to your GitHub account, it can pull from a branch in your repository, build your website, deploy it and host it! And for a bonus, it watches for Pull Requests to your main branch, and can make test sites for each PR. I was happy with this for a while.

<!-- CEOs are bros ruin everything -->

### What Changed?

"It's not you, it's me?" comes to mind. I've never been comfortable getting a commercial service for free. There's usually a catch. Companies sometimes have to change their policies to do more creepy things in order to derive profit from the 'free' service they're offering you. And I'm not saying that Netlify did anything creepy, but I just felt more comfortable taking over this responsibility myself, since I had the resources and the knowledge. And what I didn't know already -- I wanted to learn.

<!-- Can you roll-your-own magic? -->

## Enter Coolify

Obviously from the name, [Coolify](https://coolify.io/) seems like it's meant as an alternative to services like Netlify. They have a paid, hosted product that is very similar. But you can also install the same code on your own infrastructure and host it yourself.

I already had a server at [Linode](https://linode.com) that I used for various things. I added a second Linode to host and manage a lot of sites using Coolify. It runs in [Docker](https://www.docker.com/), and in turn creates a Docker instance for each of the websites you configure. This means that you can customize configurations for each if you need to. (It also creates a few more Docker instances for various purposes that you don't really have to dig into unless you want)

Some of my sites are static HTML. Some of my sites are built using Astro (like the one you're reading!). One of my sites is WordPress for now, which is handled in Coolify by creating a Docker for mysql and another for the front-end. (and having my WordPress db over here allows me to build a different front-end to pull data from mysql, and eventually migrate off of WordPress while still being able to serve all that old content).

I should clarify - I am doing all of this configuration in the Coolify UI. The only thing I did in a shell was run the setup script (which you can pipe to bash [as per the Coolify getting started instructions](https://coolify.io/self-hosted/) or download it and read through it before executing)

## It was easy, but...

Not everything was super straightforward, but I now have it up and running eleven websites with more planned as I get to them. Some of these I had hosted elsewhere on a shared server (that I'm anxious to migrate away from, with the concerns mentioned previously) and others were on my first Linode but I was manually updating them from the git repository LIKE AN ANIMAL.

My biggest issue? I was too cheap. Well, frugal. The default build pack in Coolify is [Nixpacks](https://nixpacks.com/docs/how-it-works). I was unaware of what this was or did, and I won't get into the details of it but let's just say it's resource-intensive. On my little Linode 2GB instance my deploys were failing sometimes, causing CPU spikes and eventually Linode's watcher-bots rebooted my server.

After all of my troubleshooting and hair-pulling and freaking out ... I hadn't configured enough swap space. Swap is what the operating system uses to temporarily store files that it is actively using when it runs out of real physical memory. Since Nixpacks uses a lot of library files, it was exceeding the available portion of real memory and without anywhere else to store those in-use files, it was causing problems. So, that's really the biggest caveat: **give your server more swap**. I changed mine from 512MB to 2GB (to match the amount of physical memory available) and haven't had a problem since.

## You can do it, too!

Lastly I'll advise that you can do this too, if you have the technical skills, or at least the patience to read through the documentation and follow example. And if you get really stuck they have a Discord full of helpful people who can probably guide you.

---

[^ftp]: FTP is [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol), one of the oldest ways to move files around on the internet. The basic implementation involved sending authentication credentials unencrypted, so a network administrator or devious local user could spy on this traffic and steal your username and password. I added this footnote when I realized that some of my readers would be too young to have ever used FTP. 👴

[^slashdot]: being 'slashdotted' or '[the slashdot effect](https://en.wikipedia.org/wiki/Slashdot_effect)' was a phenomena wherein the biggest link-blog of the time, [slashdot.org](https://slashdot.org/), would link to your site for some reason (usually good!) but the sudden, enormous increase in traffic from slashdot readers would murder your server. this only happened to me once.