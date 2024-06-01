interface Gift {
    name: string;
    price: number;
    recipient: string;
}

class GiftRegistry {
    private gifts: Gift[];

    constructor() {
        this.gifts = [];
    }

    addGift(gift: Gift): void {
        this.gifts.push(gift);
    }

    getGiftsForRecipient(recipient: string): Gift[] {
        return this.gifts.filter(gift => gift.recipient === recipient);
    }

    printGifts(): void {
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
