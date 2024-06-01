type MealType = 'breakfast' | 'lunch' | 'dinner';
type DietaryPreference = 'vegetarian' | 'vegan' | 'gluten-free' | 'none';

interface Guest {
    name: string;
    meal: MealType;
    preference: DietaryPreference;
}

function addGuest(guests: Guest[], guest: Guest): Guest[] {
    return [...guests, guest];
}

function findGuestsByMeal(guests: Guest[], meal: MealType): Guest[] {
    return guests.filter(guest => guest.meal === meal);
}

function findGuestsByPreference(guests: Guest[], preference: DietaryPreference): Guest[] {
    return guests.filter(guest => guest.preference === preference);
}

function printGuestList(guests: Guest[]): void {
    guests.forEach(guest => {
        console.log(`${guest.name} is having ${guest.meal} and prefers ${guest.preference} diet.`);
    });
}

// Example usage
const guests: Guest[] = [
    { name: 'Alice', meal: 'breakfast', preference: 'vegetarian' },
    { name: 'Bob', meal: 'lunch', preference: 'vegan' },
    { name: 'Charlie', meal: 'dinner', preference: 'gluten-free' },
];

// Adding a new guest
const newGuest: Guest = { name: 'David', meal: 'dinner', preference: 'none' };
const updatedGuests = addGuest(guests, newGuest);

// Finding guests by meal type
const dinnerGuests = findGuestsByMeal(updatedGuests, 'dinner');

// Finding guests by dietary preference
const vegetarianGuests = findGuestsByPreference(updatedGuests, 'vegetarian');

// Printing guest list
printGuestList(updatedGuests);
