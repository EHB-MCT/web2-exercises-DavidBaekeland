"use strict";

let number = Math.floor(Math.random() * 20);
console.log(number);

function getData() {
    document.getElementById("number").addEventListener("submit", e => {
        e.preventDefault();
        const input = document.getElementById("test").value;
        console.log(input);
        compareNumber(input).then(
            result => {
                document.getElementById("text").innerHTML = result
            },
            error => {
                document.getElementById("text").innerHTML = error
            });
    })
};

//https://javascript.info
function compareNumber(nr) {
    return new Promise(function(resolve, reject) {
        if(nr > number) {
            return resolve("The mystery number is lower. Guess again!")
        } else if(nr < number) {
            return resolve("The mystery number is higher. Guess again!")
        } else if(nr == number) {
            return resolve("You have guessed the mystery number!")
        } else {
            return reject("That is not a valid number (Error)")
        }
    })
}    

getData();
// generateNumber();