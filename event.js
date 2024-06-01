"use strict";
class Party {
    constructor(location, date) {
        this.guests = [];
        this.clowns = [];
        this.location = location;
        this.date = date;
    }
    addGuest(guest) {
        this.guests.push(guest);
    }
    addClown(clown) {
        this.clowns.push(clown);
    }
    getGuestList() {
        return this.guests;
    }
    getClownList() {
        return this.clowns;
    }
    printDetails() {
        console.log(`Party Location: ${this.location}`);
        console.log(`Party Date: ${this.date.toDateString()}`);
        console.log('Guest List:');
        this.guests.forEach(guest => {
            console.log(`- ${guest.name} (RSVP: ${guest.rsvp ? 'Yes' : 'No'})`);
        });
        console.log('Clown List:');
        this.clowns.forEach(clown => {
            console.log(`- ${clown.name} (Tricks: ${clown.tricks.join(', ')})`);
        });
    }
}
// Creating a new Party
const party = new Party('Central Park', new Date('2024-06-01'));
// Adding Guests
party.addGuest({ name: 'Alice', rsvp: true });
party.addGuest({ name: 'Bob', rsvp: false });
// Adding Clowns
party.addClown({ name: 'Bubbles', tricks: ['Juggling', 'Balloon Animals'] });
party.addClown({ name: 'Sprinkles', tricks: ['Magic', 'Face Painting'] });
// Print party details
party.printDetails();
