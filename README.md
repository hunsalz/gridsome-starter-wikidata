# Gridsome Starter Wikidata

[![Actions Status](https://github.com/hunsalz/gridsome-starter-wikidata/workflows/Gridsome%20CI-CD/badge.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/actions)
[![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)](http://doge.mit-license.org)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![GitHub forks](https://img.shields.io/github/forks/hunsalz/gridsome-starter-wikidata.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/network)
[![GitHub stars](https://img.shields.io/github/stars/hunsalz/gridsome-starter-wikidata.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/stargazers)

This is a boilerplate starter, aiming to showcase how Gridsome and an external data source (e.g. Wikidata) can nicely work together.

## Demo URL

https://hunsalz.github.io/gridsome-starter-wikidata

## Features
- Using [Wikidata](https://www.wikidata.org) as external data source
- Downloads external media data
- Use of GitHub actions CI/CD pipeline
- Grid layout
- Tagging & favorite filter
- Dark / light mode
- CSS variables, SCSS & BEM for styling
- PWA enabled

## Install

### 1. Install Gridsome CLI tool if you don't have already

`npm install --global @gridsome/cli`

### 2. Install starter

1. `gridsome create my-gridsome-site https://github.com/hunsalz/gridsome-starter-wikidata.git`
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`

## Setup GitHub Pages deploy

**Note**: By default GitHub Pages deploy isn't active. 

GitHub Pages deploy needs two secrets to work properly:

**key** | **value**
--- | ---
EMAIL | [Your commit email address on GitHub](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-on-github)
GH_PAGES_TOKEN | [Creating token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token)

## Development support

### Verify your local build

If you want to verify your local build you can easily mount your dist folder into a nginx container.

> docker run --rm --name nginx-stage -p 8080:80 -v ${PWD}/dist/:/usr/share/nginx/html/gridsome-starter-wikidata:ro -d nginx:latest

Afterwards visit [http://127.0.0.1:8080/gridsome-starter-wikidata](http://localhost:8080/gridsome-starter-wikidata)
