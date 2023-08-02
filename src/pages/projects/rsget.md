---
layout: '@/templates/BasePost.astro'
title: RsGet
description: An application for viewing, filtering, and analyzing live information from the RS economy.
pubDate: 2019-01-01T00:00:00Z
imgSrc: 'https://i.imgur.com/fp1ho42.gif'
imgAlt: 'RsGet gif'
---

RsGet is an Electron application designed for quickly extracting data from the RS economy to capitalize on profitable opportunities. It was built using Electron, React (older version without hooks), Redux, Flow, MaterialUI, and Webpack.

One of the key features is its 'Night Mode,' which enables users to log and analyze price changes over extended periods, such as during the night, facilitating informed decisions on long-term item purchases.

The idea for this application came to me when I was curious about Electron and wanted to create a tool to enhance my game market trading, a hobby I had developed. Initially, I built it for personal use in order to gain a competitive edge in the market. Consequently, I focused on functionality rather than an elaborate UI, though I still ended up using MaterialUI to give it a bit of spark. I added various convenient features like pagination, fuzzysorting, table expansion, and table sorting to elevate the user experience. This allowed the application to evolve beyond simple tables, and I even considered releasing it for public use. However, I eventually lost interest in its intended purpose, but not before utilizing for a considerable chunk of time with impressive results.

To this day, the application still works very well. If I find the time, I may revitalize the code base, clean it up, and distribute it.

One of the major challenges I encountered during development was the need to adapt the application to new data sources. Initially, it was hooked into OSBuddy's API and the official RS API. However, due to the decline of OSBuddy and the rise of RuneLite, I had to reconfigure all the endpoints to work with a different set of information.

Link to project on Github: https://github.com/mcfry/rsget