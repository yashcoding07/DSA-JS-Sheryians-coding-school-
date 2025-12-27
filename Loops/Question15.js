// Print natural numbers from 1 to N.
// Given an integer n, print all natural numbers from 1 to n.

const prompt = require("prompt-sync")();
const n = prompt("Enter the value of n: ");

if(isNaN(n)){
    console.log("Error: invalid input.");
    return
}else if(parseInt(n) < 0){
    console.log("Error: Natural numbers do not include negative numbers");
    return
}

console.log("Printing natural numbers till n.");
for(let i = 1; i <= n; i++){
    process.stdout.write(i + " ");
};