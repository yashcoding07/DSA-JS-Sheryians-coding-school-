// Sum up to N numbers
// Write a program that accepts an integer n and calculates the sum of the first n natural numbers. 
// Natural numbers start from 1 and go up to N.

const prompt = require("prompt-sync")();
const n = parseInt(prompt("Enter the value of n: "));
let sum = 0;

if(n < 0){
    console.error("Error: Invalid input");
    return
}

for(let i = 1; i <= n; i++){
    sum += i;
};

console.log(`The sum of N natural numbers is: ${sum}`);