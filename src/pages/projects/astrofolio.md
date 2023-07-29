---
layout: '@/templates/BasePost.astro'
title: Astrofolio
description: Project porfolio built with Astro. 
pubDate: 2023-07-20T00:00:00Z
imgSrc: '/assets/images/astrofolio_screen1.png'
imgAlt: 'Image post 2'
---

Astro, among the many technologies at my disposal, beckoned to the core Rails developer within me with its alluring Island Architecture. Oh, the days of my early web development journey, where complex front-end logic yearned for a home within a specific view. At that time, JQuery was the primary driver of front-end logic, and React had not yet emerged. Enter AngularJS 1.0, a savior amidst the chaos. We loaded the initial Rails page, only to summon Angular to handle more complicated design flows. A sort of quasi, island-architecture approach.

This worked, I liked it. In fact, I liked it so much that when React came out, I developed a personal project (LoL Game Service Platform) that took it a step further and 'island-architected' a majority of my front-end with React-Rails templating. It was a pain to setup, as Rails didn't play well with React in the early days, but I eventually coaxed Browserify to inject React into the asset pipeline. I had charts which swapped dynamically with build info, mastery info, rune info -- the works -- and so much more as users searched and selected relevant game information. And the beauty of it was that it was all on a Rails backdrop.

Yet, time marched on, as it always does. Front-end web development, with a resolute stride, embraced the realm of Single Page Applications (SPAs), and I naturally followed suit. Today, the allure of SPAs persists. There are a number of advantages that SPAs offer over the older style that make them very appealing. But one pain point has always been SEO. Even Dan Abramov of CRA suggests [here](https://github.com/reactjs/react.dev/pull/5487#issuecomment-1409720741) that web development is gravitating towards frameworks/libraries that put SSR first as he talks about the future of CRA and its potential deprecation. It appears that simple and traditional webpages hold a special place in the heart of the web.

But one ponders a possibility: What if a framework focused on the essence of 'Island Architecture'? Could we blend the best of both worlds? The portfolio I present, an enchanting creation borne from the arms of Astro, nudges me closer to "yes", at least for the vast majority of web pages.