import express from "express";
import fetch from "node-fetch";
import fs from "fs";
const app = express();
app.use(express.static("public"));

// https://expressjs.com/
// https://nodejs.org/api/packages.html#type
// https://www.w3schools.com/nodejs/nodejs_filesystem.asp

// https://exerror.com/referenceerror-fetch-is-not-defined-in-nodejs/
// https://exerror.com/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-importing-ecmascript-6/
// https://github.com/gorgorgordon/node_css_demo
// https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import
// https://www.section.io/engineering-education/rendering-html-pages-as-a-http-server-response-using-node-js/


const options = {
  method: 'GET',
  mode: 'cors',
  headers: {
   'Access-Control-Allow-Origin': "*",
    Accept: 'application/json',
    Authorization: 'Bearer X0vjEUN6KRlxbp2DoUkyHeM0VOmxY91rA6BbU5j3Xu6wDodwS0McmilLPBWDUcJ1'
  }
};

getData('https://api.iconfinder.com/v4/icons/search?query=Stefan%20Taubert&count=4', options).then(response => {
    console.log(response.icons[3].vector_sizes[0].formats[0].download_url);

        getSvg(`${response.icons[3].vector_sizes[0].formats[0].download_url}`, options).then(response2 =>  {
          // console.log(response2)
          newIcon("account", response2);          
        });
    
})

    async function getData(url, options) {
      let response = await fetch(url, options)
      return await response.json();
    }  

    async function getSvg(url, options) {
      let response = await fetch(url, options)
      return await response.text();
    } 
    
    // https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_fs_writefile
    // https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
    function newIcon(name, source) {
      fs.writeFile(`public/${name}.svg`, source, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    }

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(3000, function() {
  console.log("Running on port 3000.");
});


