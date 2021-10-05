"use strict";

let list = [];
let pokemon = [];

function getData() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);
        list = data.results;
        list.forEach(element => {
            console.log(element.url)
            fetch(element.url)
            .then(resp => resp.json())
            .then(data => {
                pokemon.push(data)
                console.log(pokemon.sprites.front_default);
            });
        })
        }
    );
}

window.onload = function() {
    getData();

    setTimeout(buildList, 5000);

    function buildList() {
        pokemon.forEach(data4 => {
            console.log(data4.types);
            let div = `<div class="data">
                <img src="${data4.sprites.front_default}">
                <p>${data4.id}</p>
                <p>${data4.name}</p>`;

                data4.types.forEach(types => {
                   console.log(types);
                   div += `<p>${types.type.name}</p>`;
                });

                div += `<button> add Team
                 </botton>
                 </div>`;
            document.getElementById("foto").insertAdjacentHTML("beforeend", div);
        })
    }
}


