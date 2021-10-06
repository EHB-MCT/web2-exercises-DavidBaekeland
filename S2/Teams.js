"use strict";

class Team {
    constructor() {
        this.teamName = "default Team";
        this.trainer = "ds";
        this.roster = ["test","qsdfqs"];
        console.log(this.roster)
    }
    describe() {
        console.log(...this.roster)
        return `<h1>Team ${this.teamName} with trainer ${this.trainer} has the following pokemon: ${[...this.roster]}</h1>`
    }

}

export default Team;