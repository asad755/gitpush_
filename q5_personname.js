"use strict";
/*
function toTitleCase(str: string): string {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Store a person's name in a variable
const personName: string = 'john doe';

// Print the person's name in lowercase
console.log('Lowercase:', personName.toLowerCase());

// Print the person's name in uppercase
console.log('Uppercase:', personName.toUpperCase());

// Print the person's name in titlecase
console.log('Titlecase:', toTitleCase(personName));



function toTitleCase(str: string): string {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const personName1: string = "doe khan";

console.log("Lowercase: " + personName1.toLowerCase());

console.log("Uppercase: " + personName1.toUpperCase());

console.log("TitleCase: " + toTitleCase(personName1));
*/
function toTitleCase3(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const personName2 = "john doe khan";
console.log("Lowercase: " + personName2.toLowerCase());
console.log("Uppercase: " + personName2.toUpperCase());
console.log("TitleCase: " + toTitleCase3(personName2));
function toTitleCase4(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const personName = "john doe khan";
console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
console.log("TitleCase: " + toTitleCase4(personName));
