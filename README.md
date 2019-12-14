# Gridsome Starter Wikidata

> TODO slogan

## Features
- Wikidata support
- Tags support
- Dark / light toggle
- CSS variables, SCSS & BEM for styling
- 100, 100, 100, 100, (100) score on Google Lighthouse

## Demo URL

https://hunsalz.github.io/gridsome-starter-wikidata

## Install

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Install this starter

1. `gridsome create my-gridsome-site https://github.com/hunsalz/gridsome-starter-wikidata.git`
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`

## Staging build with Docker

Mounting dist folder into nginx
```
docker run --name nginx-stage -p 8080:80 -v ${PWD}/dist/:/usr/share/nginx/html/gridsome-starter-wikidata:ro -d nginx
```