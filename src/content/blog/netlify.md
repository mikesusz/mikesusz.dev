---
title: Netlify
description: When I first set out to build this site, I wanted to learn modern web tooling that was different from the traditional server-based hosting I had used for the first half of my career, and not as heavy as the roll-your-own cloud-hosting DevOps that I had been part of at my last few jobs.
pubDate: "27 Sep 2021"
---

(note: this post was written when i was hosting this site on netlify. i have since moved to a different hosting solution.)

I started my career where I had to assemble the physical web server, install the operating system, install the web server software, then physically install the server computer into the Server Room. I moved on to large corporations where other teams handled the infrastructure and deployed the code that Engineering created.

In my past several jobs, my teams deployed our own code in environments like [AWS](https://aws.amazon.com/), [OpenShift](https://www.redhat.com/en/technologies/cloud-computing/openshift) or [IBM Cloud](https://www.ibm.com/cloud). While I have been tasked with maintaining and using a full CI/CD pipeline at work, I didn't want (or need) this kind of complexity for personal projects.

I felt a need to 'catch up' with modern tools that startups and enthusiasts have been using, so this site is published automatically on [Netlify](https://www.netlify.com/)! The workflow is so simple and cool - when changes are merged to *main* branch, they show up live a short time later (if a successful build has taken place).

But I know what you're saying, what if I want to see what my changes will look like first? Or have someone else review them before I release it to the entire world. That's where another Netlify feature comes in - when you create a Pull Request in github, it will run a build against your development branch and publish that to a temporary/testing website. You can trying it out in all your browsers/phones, send it to your editor or have your friends check it out before you merge the changes.

If you're looking for an easy-to-use method to publish a website, this is great! Now that everything is driven from git branches, I can even author new content from my iPad and have it published to my site without needing to wait until I'm at a 'real computer.'