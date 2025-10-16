// Sum of digits of a number
// Write a program that takes an integer n as input and computes the sum of its digits.
// The input number should always be positive.

const prompt = require("prompt-sync")();
let num = prompt("Enter the number: ");
const copy = num;

let sum = 0;

while(num > 0){
    let dig = num % 10;
    sum += dig;
    num = Math.floor(num / 10);
}

console.log(`The sum of digits of ${copy} is ${sum}.`);