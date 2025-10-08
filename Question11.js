// Find the Greatest number among the three numbers
// write a program that takes three integers as input and prints the greatest of the three numbers. 

const prompt = require("prompt-sync")();
const num1 = parseInt(prompt("Enter number 1: "));
const num2 = parseInt(prompt("Enter number 2: "));
const num3 = parseInt(prompt("Enter number 3: "));

if(num1 > num2 && num1 > num3){
    console.log(`${num1} is the greatest number among the all.`);
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is the greatest number among the all.`);
}else{
    console.log(`${num3} is the greatest number among the all.`);
}