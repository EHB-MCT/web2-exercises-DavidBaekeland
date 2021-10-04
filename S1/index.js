"use strict";

window.onload = function() {
    console.log("test");

    document.getElementById("form").addEventListener("submit", event => {
        event.preventDefault();

        // get values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value; 
        const order = document.getElementById("order").value;  
        console.log(name);

        // print on screen
        const message = `The order for the customer ${name}  is the following:  ${order}. The customer may be notified by email:  ${email}`;
        document.getElementById("container").innerHTML = message

        
    });

} 