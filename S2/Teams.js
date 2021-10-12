"use strict";

class Team {
    constructor() {
        this.teamName = "default Team";
        this.trainer = "ds";
        this.roster = [];
        console.log(this.roster)
    }
    describe() {
        console.log(...this.roster)
        return `<h1 id="test">Team ${this.teamName} with trainer ${this.trainer} has the following pokemon: ${[...this.roster]}</h1>`
    }
    addPokemon(pokemon) {
        console.log(this.roster);
        if(this.roster[0] != null) {
            //https://www.w3schools.com/jsref/jsref_includes_array.asp
            if (!this.roster.includes(pokemon) && this.roster.length < 6) {
                this.roster.push(pokemon);
                console.log(this.roster);
                document.getElementById("test").innerHTML = this.describe();
                alert(`The pokemon ${pokemon} has been succesfully added to the team`)
            } else if(this.roster.length == 6) {
                alert(`You have more than 6 pokemon`)
            } else {
                console.log(this.roster);
                alert(`${pokemon} is already part of your roster`)
            }
            
            // this.roster.forEach(nameRoster => {
            //     if (pokemon != nameRoster) {
            //         this.roster.push(pokemon);
            //         console.log(this.roster);
            //         document.getElementById("test").innerHTML = this.describe();
            //     } else {
            //         console.log(this.roster);
            //         alert(`${pokemon} is already in team`)
            //     }
            // });
        } else {
            this.roster.push(pokemon);
            console.log(this.roster);
            alert(`The pokemon ${pokemon} has been succesfully added to the team`)
            document.getElementById("test").innerHTML = this.describe();
        }
        
        
    }
}

export default Team;