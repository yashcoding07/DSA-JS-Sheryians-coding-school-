// Reverse a number
// write a program that accepts a positive integer n as input and returns the reverse of the number.

const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the number: ")); 
let copy = num;

let rev = 0;

while(num > 0){
    let dig = num % 10;
    rev = (rev * 10) + dig;
    num = Math.floor(num / 10);
}

console.log(`The reverse of the number ${copy} is ${rev}.`);

