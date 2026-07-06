---
title: 'Job Search Robot v2'
description: 'The next generation of my job search infrastructure, with lessons learned from v1.'
pubDate: '6 July 2026'
draft: false
---

I learned a lot of lessons from building my Job Search Bot v1, and what I've updated it with (and described here) is derived from those experiences. The new version produces better results and addresses pain points I had with v1. Let's get into it.

## Introduction

In case you didn't read the old blog post or want the TL;DR: I was separated from IBM Consulting in May 2026. I wanted to use my experience and my recent training in AI and automation to make my job search easier, leaving me more free time to work on projects (and to generally unwind).

Something I'd been focused on for the past year or so is augmenting my 30 years of front-end and user-experience architecture with an understanding of practical applications of AI models, and how agentic tools can augment workflows - for IBM Consulting's clients, and then ultimately -- for myself.

## The v1 architecture, and its problems

The background for the project was simply to perform searches on job websites, aggregate listings together, try to filter them based on criteria (salary, remote-friendly) and score them versus my resume so that I was not spending my time evaluating roles that were not a good fit or were not feasible. The simplicity of the first version is that it had essentially one step - we were asking a local model to do all of the above in one call. Even with a well crafted prompt, the limits of local resources couldn't compare with the results from enormous commercial models. Since my income stream had just ended, I didn't want to suddenly start piling on token expenses by using an API-based service like Anthropic's Claude or similar to do all the effort.

So, we had the local model do the scoring, and then I judiciously used Claude API to 'polish' the best 'tier 1' roles - augment them with more information, provide me with guidance on what I should talk about in my (hand-crafted) cover letters.

This worked okay, but it still had struggles. The scraping and retrieval process is somewhat hamstrung by what sites like LinkedIn provide when you search without being authenticated. Your URL-driven filtering for things like 'remote' are sometimes ignored. Also, certain companies are advertising roles as 'remote' even though they have a hard in-office requirement. Reading through a job description only to eventually see this onsite verbiage buried in the text was 100% a waste of my time, effort, and resources.

The major things that needed improvement were:

- making sure the salary requirements were met
- assuring that the role was remote and had no on-site or hybrid component
- eliminating mentions of deep backend technology requirements that don't fit my skillset

These hard requirements need to be _gates_, not factors that are weighed with other decision factors. Example: if it's a great fit for my skills, but requires 3 days hybrid in-office in a distant city, we need to reject that from the workflow as early as possible. Sometimes the local LLM would simply see these as a combination of Pros and Cons, giving it a reasonably high score (based on the skills match), when in reality it should be a zero.

So, when Claude and I were collaborating on the design of v2, we arrived at a staged pipeline approach, where a role would need to pass a series of specific checks before we consumed any more expensive resources evaluating the fit.

Also, we couldn't rely on the featured metadata that you normally see on a LinkedIn post when you're logged in - the pills at the top that show the salary range, remote/hybrid/onsite status, because those aren't available when unauthenticated. So in preparation for creating v2, I pored over a couple hundred listings to find the exact verbiage being used to describe each of these criteria, e.g.

> "Compensation Range" or "base salary" or "The U.S. pay range"

> "Location:" or "This is a remote position, however..." or "we value in-person collaboration"

## The v2 architecture

First and foremost, it is split to two tiers, based on cost and hardware availability.

### Always-on Tier: Mac

My Mac Mini M4 Pro (purchased in 2024 - well before the spike in demand) is on 24/7 because it serves as a file and media server via Apple's Home Sharing to all of the other devices in the house. The Mac has 24gb of RAM, allowing it to run a reasonably sized model while other processes shouldn't be affected. For this we're using qwen2.5:14b, the same model that I'm using in VS Code/Continue.dev for code completion purposes.

### On-demand tier: Gaming PC

My Gaming PC sits here unused for most of the day, and for v1 we realized it could be utilized over the network by running Ollama and allowing remote requests. The PC has a water-cooled GPU and 64gb of system memory, so we found we could comfortably run a larger model there with a few tweaks to Ollama. So the gaming PC is running qwen3.6:35b-a3b.

### The Pipeline

⚙️ Orchestrator - is a process running as a system daemon on the Mac Mini, which monitors for new job listings in the SQLite database that have the status of being 'scraped' but not yet processed in any way.

🕸️ Scraper - this is a python script that performs the searches on job sites via Playwright and stores the results in an SQLite database. I've set this up in cron to run in the early morning.

📍 Location checker - this is a simple comparison using various regular expressions, with a fallback call to the Mac-hosted LLM for backup.

💰 Salary checker - this normalizes matching strings and parses them, handling different formats (K-notation, em-dashes, different currencies), again, with the local Mac-hosted LLM as a fallback if the matching patterns don't surface any values

🧩 Skill-gap checker - this is a narrow local LLM call "is there a HARD requirement for a skill the candidate lacks?"

🚧 Hard filter - this is the gatekeeper that prevents unsuitable roles (as determined by the earlier checkers) from making it any further through the system.

🧠 Scorer - this is the larger LLM call, run manually when I know that my gaming PC is powered on and idle. This request is to match my resume and criteria against technology, seniority, accessibility focus, AI/MCP augmented workflow friendliness, and company mission.

🧮 Composite calculator - this creates a weighted combination of all of the sub-scores produced in the earlier pipeline stages

📤 Publisher - this updates my CRM (currently a markdown file in Obsidian) with the newest crop of candidate roles.

## The Process

So here's a summary of my process when I want to see a fresh batch of roles available.

Each morning when I come downstairs, the scraper has already run, and the Orchestrator has pushed each new role through the pipeline, right up until the scoring. So I start up my gaming PC w/Ollama, then I run the scorer process from the terminal on my Mac. I had considered automating this - the Orchestrator could ping to see if the PC was available, and send jobs to the scorer process automatically. What ultimately led to me leaving this manual is that sometimes I want to use the PC first thing in the morning (weekends, etc.) and Ollama is hungry for system resources. So I prefer this step to be on-demand, but it's one simple command.

When the scorer process is done (usually about a minute per new job), i run another command to do the compositing. This could be automated also but really the compositor is just a simple script doing some quick math - it's done instantaneously.

Then the final step is to run another quick command to push the final list of jobs to my CRM 'Candidates' file. Again, this part could be automated as well, but I like to read through each one and move them to an Archive file when I'm finished with a batch. (this step is necessary due to constraints with Obsidian - having one enormous file that's constantly updated doesn't sync well.)

## The Results

Here's an example of the output from v2:

> ⭐⭐⭐⭐ Senior Software Engineer, Frontend @ Company
>
> | Field      | Value                                                                                                                  |
> | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
> | **Score**  | 91/100                                                                                                                 |
> | **Salary** | $156,060 – $231,140                                                                                                    |
> | **Stack**  | React, TypeScript                                                                                                      |
> | **Level**  | Senior                                                                                                                 |
> | **Source** | Linkedin                                                                                                               |
> | **URL**    | [https://www.linkedin.com/jobs/view/senior-software-engineer-frontend-at-company-123456789](https://www.linkedin.com/) |
> | **Added**  | 2026-07-06                                                                                                             |
> | **Status** | 🆕 To Review                                                                                                           |
>
> **Fit:** Exceptional fit driven by the candidate's rare combination of deep React/TS expertise, explicit AI/MCP workflow experience matching the company's core product, and senior architectural leadership, with minor deduction on design systems as it is a nice-to-have rather than a primary requirement.
>
> **Sub-scores:** tech match: 18/20 seniority fit: 20/20 ai mcp relevance: 20/20 a11y design systems: 15/20 mission product: 18/20
>
> **Key points:**
>
> - Brings 30 years of senior engineering leadership and deep React/TypeScript expertise to own the frontend architecture for Company’s high-scale AI ordering platform.
> - Directly aligns with Company’s core AI mission through recent production experience building MCP server integrations and Claude API workflows for automated enterprise orchestration.
> - Elevates code quality and team velocity by establishing rigorous standards for reusable component libraries, design systems, and accessibility compliance across complex web applications.
> - Demonstrates proven ability to lead technical initiatives from conception to launch while mentoring developers on modern JavaScript patterns and inclusive design best practices.

So, I go through this curated list of roles, click through and read the full job descriptions, if I want to apply I write a cover letter with guidance from the points specified.

When I'm done going through a batch in my Candidates file in Obsidian, I ask claude to update the CRM document with the roles that I applied to. Claude has access to my markdown files via my Markdown Vault MCP Server, so it can read the job details from the Candidates file and copy relevant details into the CRM file (if you've ever edited a table in markdown before, you will understand why this is a job that is gladly handed-off to a robot!) Then I move the Candidates to an Archive file where I can search for them later for the documented details if I need them.

Claude also has an integrated tool to see the jobs database directly - I wrote a quick MCP server with various tools that allow Claude to search, update, and compile statistics.

## The Numbers

A few fun statistics to share about the amount of data this has processed (as of early July, 2026):

- total jobs in database: 3,373
- number of jobs that ended up pushed to be reviewed: 1,114
- number of applications sent: 156

## The Takeaways

Ultimately, I didn't want to invest more in my job search infrastructure. I wanted to be building new clever tools like this for my new employer! But alas, the market is wild right now.

This fulfills both a practical purpose for me at this moment in my career, but also I hope it's an example of how thoughtful, iterative development can be carried out in the real world (and by the real me). IBM Design Thinking taught me - Observe, Reflect, Build.

## The Hidden Message

Didn't this take me a long time to write? Wouldn't it just be faster to search manually? Well, no - Claude Code wrote a lot of this. While I could have built all of this myself, it would certainly have taken me a long time, perhaps longer than searching every day manually.

This is an excellent example of where agentic coding works so well - internal tooling doing very specific tasks that are well thought out and verified by (me).

I want to continue to be an example of how thoughtful, pragmatic use of tools for specific purposes can save tremendous amounts of time and effort. We all have different comfort levels with new things, especially if they do have some inherent costs.

I encourage you to explore your own needs, resources, and options, then make tooling and technology decisions for yourself with all of these factors in mind.
