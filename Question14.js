// Calculate the Electricity bill based on Units consumed.
// Write a program that takes the number of electricity units consumed as input and calculates the final electricity bill based on the following conditions:
// Electricity Pricing Chart
// --------------------------
// Units Consumed     | Price per Unit
// Up to 100          | Rs. 4.2 /unit
// 101 - 200          | Rs. 6 /unit
// 201 - 400          | Rs. 8 /unit
// More than 400      | Rs. 13 /unit

const prompt = require("prompt-sync")();
let units = parseInt(prompt("Enter the number of units consumed: ")); // 500
let units_copy = units;
let amount = 0;

if(units > 400){
    amount = (units - 400) * 13; // 1300
    units = 400;
}
if(units > 200 && units <= 400){
    amount = amount + (units - 200) * 8; //1600 + 1300 = 2900
    units = 200;
}if(units > 100 && units <= 200){
    amount = amount + (units - 100) * 6; // 2900 + 600 = 3500
    units = 100;
}

amount = amount + (units * 4.2); // 3500 + 420 = 3920

console.log(`The electricity bill according to the units consumed by you ${units_copy} is: Rs.${amount}`);