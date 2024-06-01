"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("./event");
const gift_1 = require("./gift");
// Creating a new Party
const party = new event_1.Party('Central Park', new Date('2024-06-01'));
// Adding Guests
party.addGuest({ name: 'Alice', rsvp: true });
party.addGuest({ name: 'Bob', rsvp: false });
// Adding Clowns
party.addClown({ name: 'Bubbles', tricks: ['Juggling', 'Balloon Animals'] });
party.addClown({ name: 'Sprinkles', tricks: ['Magic', 'Face Painting'] });
// Print party details
party.printDetails();
// Creating a Gift Registry
const registry = new gift_1.GiftRegistry();
// Adding Gifts
registry.addGift({ name: 'Clown Hat', price: 10.99, recipient: 'Alice' });
registry.addGift({ name: 'Magic Wand', price: 15.49, recipient: 'Bob' });
// Print gift registry
registry.printGifts();
