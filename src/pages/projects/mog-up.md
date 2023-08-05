---
layout: '@/templates/BasePost.astro'
title: Mog Up
description: A transmog management and sharing app that features a live 3D model viewer. Supports selecting items manually or using BetterTransmog output strings.
pubDate: 2023-05-01T00:00:00Z
imgSrc: 'https://i.imgur.com/rHL52cI.gif'
imgAlt: 'Mog Up gif'
---

Mog Up is a transmog management and sharing app that features a live 3D model viewer. Supports selecting items manually or using BetterTransmog output strings.

Created with React (CRA), GraphQL, Apollo, Tailwind + DaisyUI, Firebase (users), and Amazon S3. Back end uses Apollo Server, Express, and Sequelize ORM (with migrations) to communicate with PostgreSQL. Item data pulled from WoW's DBC. Hosted as a decoupled front-end on Render, here: https://mog-up.onrender.com/ (give it a second to wake up from sleep)

Back end can be found here: https://github.com/mcfry/mog-up-server