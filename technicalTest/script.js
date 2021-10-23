import fetch from "node-fetch";
import http from "http";
import fs from "fs"



// api werkt met node. Data kan getoond worden in terminal en ook geprint worden op scherm

// https://www.w3schools.com/nodejs/shownodejs.asp?filename=demo_http

const options = {
  method: 'GET',
  mode: 'cors',
  headers: {
   'Access-Control-Allow-Origin': "*",
    Accept: 'application/json',
    Authorization: 'Bearer X0vjEUN6KRlxbp2DoUkyHeM0VOmxY91rA6BbU5j3Xu6wDodwS0McmilLPBWDUcJ1'
  }
};


console.log(http)
// var http = require('http');

//create a server object:


    getData('https://api.iconfinder.com/v4/icons/search?query=arrow&count=10&premium=false', options).then(response => {
      http.createServer(function (req, res) {
        res.write(response.icons[0].raster_sizes[0].formats[0].preview_url)
        res.end(); //end the response
      }).listen(5500); 
    }).catch(err => console.error(err));

    async function getData(url, options) {
      let response = await fetch(url, options)
      return await response.json();
    }  