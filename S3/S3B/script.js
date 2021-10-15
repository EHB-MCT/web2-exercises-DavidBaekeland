"use strict";

let baseurl = "http://www.omdbapi.com/?apikey=bb115798"

window.onload = function() {
    //input
    document.getElementById("searchform").addEventListener("submit", e => {
        e.preventDefault();
        const input = document.getElementById("inputTitle").value;
        console.log(input)
        let url = baseurl + `&t=${input}`;

        getData(url).then(
            result => {
                console.log(result)
                let html = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="${result.Poster}" id="i" class="card-img" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${result.Title}</h5>
                      <p class="card-text">${result.Plot}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>`
    
              document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeend", html)
            }
        );
    })
    

    // function showData(result) {
    //     result => {
    //         console.log(result)
    //         document.getElementById("test").innerHTML = `<h1 id="test2">Title ${result.title} with trainer </h1>`
    //     }
    // }
    
    // getData().then((result) => showData(result))
    
}


async function getData(url) {
    let response = await fetch(url)
    return await response.json();
    
};