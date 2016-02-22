# Project "Today I Learned"

## What is this?

A "Today I Learned" themed page/blog designed to keep track of daily learnings. Heavily Inspired by the excellent project of [Hashrocket](https://til.hashrocket.com/) Find it at [http://hibernationtheory.github.io/](http://hibernationtheory.github.io/)

## How it works?

- It uses another github repo by myself [get-gists-for-given-user](https://github.com/hibernationTheory/get-gists-for-given-user) to fetch the gists for a given user that has given prefix (`_til` in this case).

- Creates a json file from the fetched gists and uses the json file to display the data in the page.

- Relies mostly on Webpack and React.

## Motivation

To keep track of learnings and build up handson knowledge in React.

## To-Do

- have dedicated pages for indivual posts
- find a dedicated host for the project (should preferrably live on rodandcones.com)
- find a better way of deployment
- create a statistics page (see hashrocket project to get an idea)
- create a 'chain' notification.
- implement search functionality
- implement a grid of list views for each categories inside the statistics page.
- optimize the python fetch script so it doesn't create the .md files.
- once you have enough posts increase the post per page limit.


