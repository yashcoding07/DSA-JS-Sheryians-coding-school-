// Find the greatest of the two numbers
// Accept two numbers and write a program to find and return the greatest of the two numbers

const prompt = require("prompt-sync")();
const num1 = parseInt(prompt("Enter the number 1: "));
const num2 = parseInt(prompt("Enter the number 2: "));

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}.`);
}else{
    console.log(`${num2} is greater than ${num1}.`);
}

