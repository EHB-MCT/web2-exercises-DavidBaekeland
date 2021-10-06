"use strict";

import Team from "./Teams.js";

let list = [];
let pokemon = [];



function getData() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(resp => resp.json())
    .then(data => {
        list = data.results;
        list.forEach(element => {
            
            fetch(element.url)
            .then(resp => resp.json())
            .then(data => {
                pokemon.push(data)
               
            });
        })
        }
    );
}

window.onload = function() {
    getData();

    setTimeout(buildList, 5000);

    function buildList() {
        let t = new Team();
        t.describe();
        pokemon.forEach(data4 => {
            
            let div = `<div class="data">
                <img src="${data4.sprites.front_default}">
                <p>${data4.id}</p>
                <p>${data4.name}</p>`;

                data4.types.forEach(types => {
                   
                   div += `<p>${types.type.name}</p>`;
                });

                div += `<button> add Team
                 </botton>
                 </div>`;
            document.getElementById("foto").insertAdjacentHTML("beforeend", div);
        })
    }
    
}

