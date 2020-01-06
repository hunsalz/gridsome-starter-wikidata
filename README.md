# Gridsome Starter Wikidata

[![Actions Status](https://github.com/hunsalz/gridsome-starter-wikidata/workflows/Gridsome%20CI-CD/badge.svg)](https://github.com/hunsalz/gridsome-starter-wikidata/actions)
[![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)](http://doge.mit-license.org)

This is a boilerplate starter, aiming to showcase how Gridsome and an external data source (e.g. Wikidata) can nicely work together.

## Features
- Binding of an external data source with remote images; e.g. [Wikidata](https://www.wikidata.org/)
- Grid layout
- Tag support
- Dark / light toggle
- CSS variables, SCSS & BEM for styling
- 100, 100, 100, 100, (100) score on Google Lighthouse
- Github actions

## Demo URL

https://hunsalz.github.io/gridsome-starter-wikidata

## Install

### 1. Install Gridsome CLI tool if you don't have already

`npm install --global @gridsome/cli`

### 2. Install starter

1. `gridsome create my-gridsome-site https://github.com/hunsalz/gridsome-starter-wikidata.git`
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`

## Setup Github deploy

*Note*: By default Github deploy isn't active. 

Github deploy needs to secrets to be set properly: Your mail address *EMAIL* and your Github token *GH_TOKEN*.

As mail address you can simply use [your commit email address on Github](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-on-github)

For generating Github personal access tokens have a look [here](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token).

Finally you should have the following secrets available in your project:

![Project secrets](/.github/assets/screenshot-secrets.png)

## Stage build with Docker

Mount dist folder into nginx and visit http://localhost:8080/gridsome-starter-wikidata/

```
docker run --rm --name nginx-stage -p 8080:80 -v ${PWD}/dist/:/usr/share/nginx/html/gridsome-starter-wikidata:ro -d nginx:latest
```