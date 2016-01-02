# Artus

A simple web-based application to save articles and read them later.

![Demo](/resources/demo.gif)

# How to run

Install [Node.js](https://nodejs.org)

Grab a parser API key at [readability.com/developers/api](https://readability.com/developers/api)
and set your key in the `READABILITY_PARSER_KEY` setting of the .env.example file.

```shell
$ cd artus/
$ npm install
$ cp .env.example .env
$ npm run start
```

Go to [localhost:3000](http://localhost:3000/)
