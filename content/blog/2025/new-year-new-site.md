---
title: "New year, new... site?"
date: 2025-01-01T18:36:26+11:00
draft: false
---

If for some reason you had seen this site before the publication of this post, you'd notice that it looks quite different! Over the past couple of weeks I've been working on migrating everything to [Hugo](https://gohugo.io), and decided to redesign the site to make it look less like its original [muse](https://www.mrbrezina.com) (which I referenced heavily in the initial development stage). 

One of the biggest problems with my original website was that it was very cumbersome to update. Essentially, I had designed it as one single HTML page, which had a navigation bar allowing the user to show only particular sections of the site (e.g., writing, presentations, etc.). This meant that if I wanted to add new content, I needed to go to the spot in the HTML file where that content belonged, and add it accordingly. You can imagine how messy this would become, especially since I planned on updating the site regularly with content. I needed a far more modular approach. The solution I found was to use Hugo to structure the site &ndash; an idea I got from [consequently.org](https://consequently.org), the beautiful website of Greg Restall, a former lecturer of mine at university. 

With Hugo, the site management is fairly hands-off. Each page is structured as a generic template, and is populated upon publication with individual markdown files, which Hugo converts to HTML whenever I push the changes to GitHub. Each blog post, presentation, etc. is written as its own .md file. So, when I'm done writing this post, Hugo will turn the markdown content into HTML that can be displayed on the site using the template I've constructed for blog posts. The templatic structure of a Hugo site means that I can update any of the templates and the whole site will change accordingly, since the content of each page exists independently of the formatting.

Along with the restructuring of the code, I've also readjusted the design. My aim has been to construct a minimalist, functional design which is easy to interpret. It should be clear on each page which section you're in, how the elements are organised, and what the title of the post is (if any). The idea is to   A significant upgrade to the site is the [extra/](/extra) page, which contains a bunch of my favourite bits of music, writing, and film, and for which I tried to create a simple bookshelf display. It's a work in progress, and as such is missing a developed book section. I might also experiment with a vertical bookshelf design, for fun.

This has all taught me a lot about HTML and CSS, and I hope to learn more as the year goes on. My plan is to update the blog regularly, and to add a new section for short essays or compilations of stuff that I like. My checklist at the moment is to accomplish the following before the end of the month:

  - Elastic ASCII image border that matches the size of the image
  - More complete [extra/](/extra) page, with more books and movies
  - A new essays/ page, with short essays dedicated to particular topics
  - Randomised music roulette on front page
