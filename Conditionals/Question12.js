// Check if a year is a leap year or not
// write a program that takes an integer as the input representing the year and check the year is a leap year or not ? 
// A year is considered a leap year if it satisfies either of the following conditions:
// 1. It is divisible by 4 but not by 100
// 2. It is divisible by 400

const prompt = require("prompt-sync")();
const year = parseInt(prompt("Enter the year: "));

if(year % 4 == 0 && year % 100 != 0){
    console.log(`${year} is a leap year.`);
}else if(year % 400 == 0){
    console.log(`${year} is a leap year.`);
}else{
    console.log(`${year} is not a leap year.`);
}

