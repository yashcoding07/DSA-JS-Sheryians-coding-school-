// Factorial of a number
// write a program that accepts an integer as n as input and calculates the factorial of n.

const prompt = require("prompt-sync")();
const n = parseInt(prompt("Enter the value of n: "));
let mul = 1;

if(n < 0){
    console.log("Error: Invalid input.");
    return
};

for(let i = 1; i <= n; i++){
    mul *= i;
};

console.log(`The Factorial of ${n} is ${mul}.`);