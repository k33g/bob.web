#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');


let port = process.env.EXPRESS_PORT;

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./'));

app.get('/yo', (req, res) => {
  res.send({message:"💙", "ff":process.env.TOTO});
})

app.listen(port)
console.log(`🌍 Web Server is started - listening on ${port}`)
