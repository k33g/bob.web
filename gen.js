#!/usr/bin/env node
const md = require('markdown-it')({
  html: true,
  linkify: true
});
const emoji = require('markdown-it-emoji');
const fs = require('fs');

md.use(emoji);

console.log("generate files ...")


fs.readFile('./index.md', 'utf8', (err, data) => {
  if (err) { return console.error(err); }
  //console.log(data);
  fs.writeFile(`./index.html`, md.render(data), (err) => {
    if (err) { return console.error(err); }
  });
});
