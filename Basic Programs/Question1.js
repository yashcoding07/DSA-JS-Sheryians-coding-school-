// Sum of Two integers 
// Write a Program that takes two numbers as input and print their sum.

const prompt = require("prompt-sync")();
const num1 = parseInt(prompt("Enter number1: "));
const num2 = parseInt(prompt("Enter number2: "));

let result = num1 + num2;

console.log(result);