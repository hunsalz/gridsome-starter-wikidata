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

- Uses [Wikidata](https://www.wikidata.org) as external data source
- Enables downloads of external media data
- Make use of GitHub actions / CI/CD pipeline
- Shows a waterfall grid / aka masonary grid
- Shows tagging capabilities
- Shows favorite filter function
- Enables dark & light mode
- Uses CSS variables, SCSS & BEM for styling
- Shows PWA capabilities

## Install

### 1. Install Gridsome CLI tool if you don't have already

`npm install --global @gridsome/cli`

### 2. Install starter

1. `gridsome create my-gridsome-site https://github.com/hunsalz/gridsome-starter-wikidata.git`
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`

## GitHub Actions

Project includes [GitHub Actions](https://github.com/features/actions) by default.

### skip ci

[GitHub Actions](https://github.com/features/actions) run automatically whenever you push to your Git repo. Add `skip ci` to commit header to skip a CI run.

### GitHub Pages

[GitHub Actions](https://github.com/features/actions) workflow contains [GitHub Pages](https://pages.github.com/) as deployment target. By default GitHub Pages deploy is skipped until GH_TOKEN is set as [repository secret](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) var. Prerequisite is that you have created a corresponding [token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token).

## Development support

If you want to verify your local build, you can easily mount your dist folder into a nginx container.

> docker run --rm --name nginx-stage -p 8080:80 -v ${PWD}/dist/:/usr/share/nginx/html/:ro -d nginx:latest

Afterwards visit [http://127.0.0.1:8080/](http://localhost:8080)

If you set PATH_PREFIX=/gridsome-starter-wikidata just run:
> docker run --rm --name nginx-stage -p 8080:80 -v ${PWD}/dist/:/usr/share/nginx/html/gridsome-starter-wikidata:ro -d nginx:latest

Afterwards visit [http://127.0.0.1:8080/gridsome-starter-wikidata](http://localhost:8080/gridsome-starter-wikidata)
