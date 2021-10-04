"use strict";

window.onload = function() {
    const dishes = [];
    // array
    dishes.push({
        id: "1",
        name: "pizza Mozarella",
        price: 10
    }, 
    {
        id: "2",
        name: "tomato soep",
        price: 3
    },
    {
        id: "3",
        name: "Pasta",
        price: 5
    });

    dishes.forEach(dish => {
        console.log(dish);
        const radio = `<label><input type="radio" name="orderDish" value="${dish.id}" id="${dish.id}">${dish.name}</label><br>`;
        document.getElementById("submit").insertAdjacentHTML("beforebegin", radio)
    });
    console.log("test");




    document.getElementById("form").addEventListener("submit", event => {
        event.preventDefault();

        // // get values
        // const name = document.getElementById("name").value;
        // const email = document.getElementById("email").value; 
        // const order = document.getElementById("order").value;  
        // console.log(name);

        // // print on screen
        // const message = `The order for the customer ${name}  is the following:  ${order}. The customer may be notified by email:  ${email}`;
        // document.getElementById("container").innerHTML = message
        
        // // object
        const order = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            // order: document.getElementsByName("orderDish").value,
            printOrder(name, email, order) {
                console.log(document.getElementsByName("orderDish"));
                const message = `The order for the customer ${name}  is the following:  ${order}. The customer may be notified by email:  ${email}`;
                document.getElementById("container").innerHTML = message
            }
            
        };


        // https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
        // https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
        document.getElementsByName("orderDish").forEach(e => {
            if(e.checked) {
                dishes.forEach(dish => {
                    console.log(e)
                    if(dish.id == e.value)  {
                        order.printOrder(order.name, order.email, dish.name)
                    }
                })
                
            }
        })
    });

    
} 

