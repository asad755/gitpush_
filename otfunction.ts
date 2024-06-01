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
