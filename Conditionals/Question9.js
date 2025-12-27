// Check if a number is even or odd
// write a program that takes an integer as input and check whether the number is even or odd. 

const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter the number: "));

if(num % 2 == 0){
    console.log(`The given number ${num} is an even number.`);
}else{
    console.log(`The given number ${num} is an odd number.`);
}
