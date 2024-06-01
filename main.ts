import { Party } from './event';
import { GiftRegistry } from './gift';

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

// Creating a Gift Registry
const registry = new GiftRegistry();

// Adding Gifts
registry.addGift({ name: 'Clown Hat', price: 10.99, recipient: 'Alice' });
registry.addGift({ name: 'Magic Wand', price: 15.49, recipient: 'Bob' });

// Print gift registry
registry.printGifts();
