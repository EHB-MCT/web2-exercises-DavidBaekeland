"use strict";

class Team {
    constructor() {
        this.teamName = "default Team";
        this.trainer = "ds";
        this.roster = [];
        console.log(this.roster)
    }
    describe() {
        console.log(this.roster)
        return `Team ${this.teamName} with trainer ${this.trainer} has the following pokemon: ${[...this.rooster]}`
    }

}

export default Team;