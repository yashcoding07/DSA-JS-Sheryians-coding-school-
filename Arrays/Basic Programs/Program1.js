// Write a program that accepts an integer n from the user, creates an array of size n, takes n integer inputs to fill the array, and then calculate the sum and mean of the array elements.

let prompt = require("prompt-sync")();
let size = Number(prompt("Enter the size of an array: "));
let arr = new Array(size);
let sum = 0;
let mean;

for(let i = 0; i < arr.length; i++){
    arr[i] = Number(prompt("Enter the element: "));
    sum = sum + arr[i];
    mean = sum/size;
}

console.log("sum: " + sum);
console.log("mean: " + mean);