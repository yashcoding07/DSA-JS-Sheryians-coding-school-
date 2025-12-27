// Greet the User
// Write a program that accepts name and age as input and prints a greeting message.

const prompt = require("prompt-sync")();
const name = prompt("Enter Your name: ");
const age = parseInt(prompt("Enter Your age: "));

console.log(`Hello ${name} you are ${age} years old.`);