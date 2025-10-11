// Print natural numbers from N to 1
// Given an integer n, print all the natural numbers starting from n down to 1.

const prompt = require("prompt-sync")();
const n = prompt("Enter the value of n: ");

if(isNaN(n)){
    console.log("Error: invalid input.");
    return
}else if(parseInt(n) < 0){
    console.log("Error: Natural numbers do not include negative numbers");
    return
}

console.log("Printing natural numbers from N to 1.");
for(let i = n; i > 0; i--){
    process.stdout.write(i + " ");
};

