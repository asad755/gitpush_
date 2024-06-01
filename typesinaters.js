"use strict";
class Typeinator {
    constructor(year, city, mission) {
        this.year = year;
        this.city = city;
        this.mission = mission;
    }
    startMission() {
        console.log('Zap! Hiss... Bang!');
        console.log(`A bolt of lightning strikes through the cloudless night.`);
        console.log(`Whisks of smoke swirl around your feet, stepping out of the time travel orb onto the streets of ${this.city}.`);
        console.log(`The year is ${this.year} and your mission is to ${this.mission}.`);
    }
    identity() {
        console.log('You are the Typeinator. 🤖');
    }
}
const mission = "prepare several JavaScript projects for the future of ECMAScript syntax features";
const typeinator = new Typeinator(2004, 'Los Angeles', mission);
typeinator.startMission();
typeinator.identity();
