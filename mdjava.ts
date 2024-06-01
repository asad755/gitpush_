interface Guest {
    name: string;
    meal: string;
    preference: string;
}

function addGuest(guests: Guest[], guest: Guest): Guest[] {
    return [...guests, guest];
}

function findGuestsByMeal(guests: Guest[], meal: string): Guest[] {
    return guests.filter(guest => guest.meal === meal);
}

function findGuestsByPreference(guests: Guest[], preference: string): Guest[] {
    return guests.filter(guest => guest.preference === preference);
}

function printGuestList(guests: Guest[]): void {
    guests.forEach(guest => {
        console.log(`${guest.name} is having ${guest.meal} and prefers ${guest.preference} diet.`);
    });
}
