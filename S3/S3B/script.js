"use strict";

window.onload = function() {    
    async function getData() {
        let response = await fetch("http://www.omdbapi.com/?t=parasite&apikey=bb115798")
        let data = await response.json();


        console.log(data)
    }
    
    getData();
}