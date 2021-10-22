import fetch from "node-fetch";
import http from "http";

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

  
  fetch('https://api.iconfinder.com/v4/iconsets?count=10', options)
    .then(response => response.json())
    .then(response => {
      http.createServer(function (req, res) {
        res.write(response.iconsets[0].name); 
        res.end(); //end the response
      }).listen(5500); 
    })
    .catch(err => console.error(err));  





/**
 * Pantry: JSON storage
 * Als iconfinder API niet werkt kan ik deze api gebruiken
 */
// basket: verzameling van gegevens
// Get Data => data ophalen van 1 collection
// let url = "https://getpantry.cloud/apiv1/pantry/7700ebaf-0b52-4d94-87f5-41178ac4fe59";

// getData(url+"/basket/test5").then(data => console.log(data))

// async function getData(url) {
//   let response = await fetch(url)
//   return await response.json();
// };

// // post Data => een nieuwe basket aanmaken met inhoud
// // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// document.getElementById("nieuw").addEventListener("submit", e=>{
//   e.preventDefault();
//   let value = document.getElementById("value").value;

//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       "naam9": value
//     }),
//     redirect: 'follow'
//   };
  
//   let naam = document.getElementById("naam").value;
  
//   getData2(url+`/basket/${naam}`, requestOptions).then(result => console.log(result))
  
//   async function getData2(test3, r) {
//     let response = await fetch(test3, r)
//     return await response.text();
//   };
// })



// // PUT Data => een nieuwe basket aanmaken met inhoud
// // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// document.getElementById("verander").addEventListener("submit", e => {
//   e.preventDefault();
//   let value = document.getElementById("valueVerander").value;
//   const requestOptions = {
//     method: 'PUT',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       "naam9": value
//     }),
//     redirect: 'follow'
//   };
  
//   let naam = document.getElementById("naamVerander").value;
//   getData3(url+`/basket/${naam}`, requestOptions).then(result => console.log(result))
  
//   async function getData3(test3, r) {
//     let response = await fetch(test3, r)
//     return await response.text();
//   };
// })
