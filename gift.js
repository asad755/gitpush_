"use strict";
class GiftRegistry {
    constructor() {
        this.gifts = [];
    }
    addGift(gift) {
        this.gifts.push(gift);
    }
    getGiftsForRecipient(recipient) {
        return this.gifts.filter(gift => gift.recipient === recipient);
    }
    printGifts() {
        console.log('Gift Registry:');
        this.gifts.forEach(gift => {
            console.log(`- ${gift.name} for ${gift.recipient} ($${gift.price.toFixed(2)})`);
        });
    }
}
// Creating a Gift Registry
const registry = new GiftRegistry();
// Adding Gifts
registry.addGift({ name: 'Clown Hat', price: 10.99, recipient: 'Alice' });
registry.addGift({ name: 'Magic Wand', price: 15.49, recipient: 'Bob' });
// Print gift registry
registry.printGifts();
