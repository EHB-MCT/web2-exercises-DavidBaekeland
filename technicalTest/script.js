import fetch from "node-fetch";
import http from "http";
import fs from "fs";



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


// console.log(http)
// var http = require('http');

//create a server object:

// https://zetcode.com/javascript/http/
// https://nodejs.org/api/http.html
// https://stackoverflow.com/questions/14413559/why-is-response-write-in-node-js-not-injecting-html
// https://www.w3schools.com/tags/tag_img.asp
// https://www.codegrepper.com/code-examples/javascript/nodejs+send+file+http+response
// https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
// https://www.w3schools.com/nodejs/nodejs_filesystem.asp
    getData('https://api.iconfinder.com/v4/icons/search?query=Stefan%20Taubert&count=4', options).then(response => {
    console.log(response.icons[3].vector_sizes[0].formats[0].download_url);  
    
    http.createServer(function (req, res) {
        getSvg(`${response.icons[3].vector_sizes[0].formats[0].download_url}`, options).then(response2 =>  {
          console.log(response2)
          

          // Ophalen van svg
          fs.writeFile('response.svg', response2, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });


          // tonen van png
          let img = `<img src="${response.icons[3].raster_sizes[0].formats[0].preview_url}" alt="Girl in a jacket">`;
          res.writeHead(200,{"Content-Type" : "text/html"});
          res.write(img)
          res.end(); //end the response

        });
      }).listen(5500); 
    }).catch(err => console.error(err));

    async function getData(url, options) {
      let response = await fetch(url, options)
      return await response.json();
    }  

    async function getSvg(url, options) {
      let response = await fetch(url, options)
      return await response.text();
    }  