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
