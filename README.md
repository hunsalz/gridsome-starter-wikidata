# Gridsome Starter Wikidata

[![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)](http://doge.mit-license.org)

This is a boilerplate starter, aiming to showcase how Gridsome and an external data source (e.g. Wikidata) can nicely work togehter.

## Features
- Binding of an external data source with remote images; e.g. [Wikidata](https://www.wikidata.org/)
- Grid layout
- Tag support
- Dark / light toggle
- CSS variables, SCSS & BEM for styling
- 100, 100, 100, 100, (100) score on Google Lighthouse

## Demo URL

https://hunsalz.github.io/gridsome-starter-wikidata

## Install

### 1. Install Gridsome CLI tool if you don't have already

`npm install --global @gridsome/cli`

### 2. Install starter

1. `gridsome create my-gridsome-site https://github.com/hunsalz/gridsome-starter-wikidata.git`
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`

## Stage build with Docker

Mount dist folder into nginx and visit http://localhost:8080/gridsome-starter-wikidata/

```
docker run --rm --name nginx-stage -p 8080:80 -v ${PWD}/dist/:/usr/share/nginx/html/gridsome-starter-wikidata:ro -d nginx:latest
```