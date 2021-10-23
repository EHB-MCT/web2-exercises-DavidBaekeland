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
// https://nodejs.org/docs/v0.3.1/api/fs.html
// https://stackoverflow.com/questions/4720343/loading-basic-html-in-node-js
//  https://www.semicolonworld.com/question/65581/how-to-display-an-image-sent-through-http-node-js-in-the-front-end-using-fetch
// https://nodejs.org/api/http.html
  
  // fetch('https://api.iconfinder.com/v4/icons/search?query=arrow&count=10&premium=false', options)
  //   .then(response => response.json())
  //   .then(response => {
  //     http.createServer(function (req, res) {
  //       resp.writeHead(200, {'Content-Type': 'text/html'})
  //       let img = `<img src="${response.icons[0].raster_sizes[0].formats[0].preview_url}">`
  //       // console.log()
  //       res.write(img)
  //       res.end(); //end the response
  //     }).listen(5500); 
  //   })
  //   .catch(err => console.error(err));  

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