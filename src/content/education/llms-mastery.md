---
title: "LLMs Mastery: Complete Guide to Transformers & Generative AI"
category: "Web"
institution: "Udemy"
date: "June 2025"
description: "A deep-dive into Generative AI Principles, NLP Fundamentals, Model Training and Fine Tuning"
url: "https://www.udemy.com/course/llms-mastery-complete-guide-to-transformers-generative-ai/"
draft: false
---

This one took me a while to get through, but that was mostly technical/architectural challenges. The instructor does a good job of progressively revealing complexity and soundly covering the principles to achieve results at each level (model selection, training, etc)

I'm glad that they also spent time explaining how to optimize models through choices made while training and operating. A lot of complaints about AI usage is that it is wasteful and/or very expensive. If you plan and execute well, it doesn't have to be. This course covers how to change parameters to increase efficiency while maintaining the same quality of output.

I had mentioned the time this took me, and to elaborate -- when I do training, I like to replicate locally everything that the instructor is doing. Early on in this course, using smaller models (like [Bert](https://huggingface.co/google-bert/bert-base-uncased)) I was about to replicate everything on my MacBook Pro as it progressed. But eventually, to use larger and more complex models (like [Dialo](https://huggingface.co/microsoft/DialoGPT-medium)) the instruction moved to running on Ubuntu linux with multiple Nvidia RTX4090 GPUs -- not an environment I could replicate locally. To their credit, they did go over various options to rent time on shared hardware/environments, so if I had been willing to pay for one of these services, I could have continued to play along.

My only other notes are a few more pre-requisites: while this is part of a larger AI curriculum that IBM established, which include a bootcamp in Python, this course really does rely on your having more practical knowledge of Python and having a managed Python environment (so you can specify Python versions per-project) and have a working knowledge of [Jupyter](https://jupyter.org/) notebooks. These were side-quests that I had to (discover for myself, and) perform in order to complete the main course.

I'm glad I took this course. In the future I don't expect my particular work to be this close-to-the-metal, but I like to know what's going on deeper in the stack and how my changes at the top can affect and/or benefit from it.