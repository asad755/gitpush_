"use strict";
function addGuest(guests, guest) {
    return [...guests, guest];
}
function findGuestsByMeal(guests, meal) {
    return guests.filter(guest => guest.meal === meal);
}
function findGuestsByPreference(guests, preference) {
    return guests.filter(guest => guest.preference === preference);
}
function printGuestList(guests) {
    guests.forEach(guest => {
        console.log(`${guest.name} is having ${guest.meal} and prefers ${guest.preference} diet.`);
    });
}
// Example usage
const guests = [
    { name: 'Alice', meal: 'breakfast', preference: 'vegetarian' },
    { name: 'Bob', meal: 'lunch', preference: 'vegan' },
    { name: 'Charlie', meal: 'dinner', preference: 'gluten-free' },
];
// Adding a new guest
const newGuest = { name: 'David', meal: 'dinner', preference: 'none' };
const updatedGuests = addGuest(guests, newGuest);
// Finding guests by meal type
const dinnerGuests = findGuestsByMeal(updatedGuests, 'dinner');
// Finding guests by dietary preference
const vegetarianGuests = findGuestsByPreference(updatedGuests, 'vegetarian');
// Printing guest list
printGuestList(updatedGuests);
