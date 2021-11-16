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

// getData('https://api.iconfinder.com/v4/icons/search?query=Stefan%20Taubert&count=4', options).then(response => {
//     console.log(response.icons[3].vector_sizes[0].formats[0].download_url);

//         getSvg(`${response.icons[3].vector_sizes[0].formats[0].download_url}`, options).then(response2 =>  {
//           // console.log(response2)
//           newIcon("account", response2);          
//         });
    
// })

// getData("https://api.iconfinder.com/v4/icons/search?query=Heroicons&count=45", options).then(response => {
//   getSvg(`${response.icons[42].vector_sizes[0].formats[0].download_url}`, options).then(response2 =>  {
//     // console.log(response2)
//     newIcon("logout", response2);          
//   });
// })

// getData("https://api.iconfinder.com/v4/icons/search?query=mail&count=45", options).then(response => {
//   // getSvg(`${response.icons[42].vector_sizes[0].formats[0].download_url}`, options).then(response2 =>  {
//     //   newIcon("logout", response2);          
//     // });
//       console.log(response)
// })


// for(let i=0; i<100; i++) {
//   getData(`https://api.iconfinder.com/v4/licenses/${i}`, options).then(response => {
//     if(response.name.includes("MIT")) {
//       console.log(response);

//     }

//   })

// }



// id zoeken van een bepaalde artist -> gebruiken om iconsets op te halen
// 642 
// let i = 600;
// let x = setInterval(test, 1000);

// async function test() {
//   console.log(i)
//   await getData(`https://api.iconfinder.com/v4/authors/${i}`, options).then(response => {
//     console.log(response);
//   if(response.name == "Golmin Design")  {
//         console.log("qfqdsf", response);
//       }  else if(i==900){
//         console.log(response);
//       }
//     })
//   i++
// }


// 88918
// id van iconset ophalen: 642: id van bepaalde artist
// getData("https://api.iconfinder.com/v4/authors/642/iconsets?count=10", options).then(response => {
  

// 100 icons in icon set ophalen met behulp van id
  // getData(`https://api.iconfinder.com/v4/iconsets/${response.iconsets[0].iconset_id}/icons?count=100`, options).then(response2 => {
  //   console.log(response2)
    
  
  // console.log(response2.icons[34].vector_sizes[0].formats[0].download_url)


  // 1 iconset -> 100 icons -> downloaden
  // icon: 28ste -> dollar
  //   response2.icons.forEach((res, index) => {
  //       // console.log(res.vector_sizes[0].formats[0].download_url)
        

  //       getSvg(`${res.vector_sizes[0].formats[0].download_url}`, options).then(response3 =>  {
  //             // console.log(response2)
  //             newIcon(`icon${index}`, response3);          
  //           }).catch(err => console.log(err));;

  //     })
  //     console.log(response.icons);


  // dollar icon
  // getSvg(`${response2.icons[27].vector_sizes[0].formats[0].download_url}`, options).then(response3 =>  {
  //   newIcon(`dollar`, response3);          
  // }).catch(err => console.log(err));

  // // plus icon
  // getSvg(`${response2.icons[75].vector_sizes[0].formats[0].download_url}`, options).then(response3 =>  {
  //   newIcon(`plus`, response3);          
  // }).catch(err => console.log(err));
    
  // }).catch(err => console.log(err));

// }).catch(err => console.log(err));



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


