// Calculate Final Amount After Discount
// Write a program that takes an initial amount as input and calculates the final amount and calculate the final amount after applying a flat discount based on the following conditions
// Discount Chart Based on Purchase Amount
// ---------------------------------------
// Amount Range      | Discount
// 0 - 5000          | 0%
// 5001 - 7000       | 5%
// 7001 - 9000       | 10%
// More than 9000    | 20%

const prompt = require("prompt-sync")();
const amount = parseInt(prompt("Enter the initial amount: "));
let dis;

if(amount >= 0 && amount <= 5000) dis = 0;
else if(amount > 5000 && amount <= 7000) dis = 5;
else if(amount > 7000 && amount <= 9000) dis = 10;
else if(amount > 9000) dis = 20;
else return console.log("Error: invalid input pls try again with valid amount.");

let totalAmount = (amount - (dis * amount)/100);

console.log(`Your total amount after ${dis}% discount is: ${totalAmount}`);