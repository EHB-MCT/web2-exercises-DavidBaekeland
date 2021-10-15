"use strict";

let baseurl = "http://www.omdbapi.com/?apikey=bb115798"

window.onload = function() {
    //input
    document.getElementById("searchform").addEventListener("submit", e => {
        e.preventDefault();
        const input = document.getElementById("inputTitle").value;
        console.log(input)
    })
    
    let url = baseurl + "&t=parasite";

    // function showData(result) {
    //     result => {
    //         console.log(result)
    //         document.getElementById("test").innerHTML = `<h1 id="test2">Title ${result.title} with trainer </h1>`
    //     }
    // }
    
    // getData().then((result) => showData(result))
    getData(url).then(
        result => {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
            console.log(result),
            document.getElementById("title").innerText = `${result.Title}`;
            document.getElementById("discription").innerText = `${result.Plot}`;
            document.getElementById("i").setAttribute("src", `${result.Poster}`)
            console.log()
        }
    );
}


async function getData(url) {
    let response = await fetch(url)
    return await response.json();
    
};