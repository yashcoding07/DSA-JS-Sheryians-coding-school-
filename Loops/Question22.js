// Check if a number is Automorphic

const prompt = require("prompt-sync")();
let num = prompt("Enter the number: ");
let sq = num * num;
let copy = num;
let count = 0;

while(n > 0){
    count++;
    num = Math.floor(num/10);
}

if(sq % Math.pow(10, count) == copy){
    console.log(`Yes, The number ${copy} is an Automorphic number.`);
}else{
    console.log(`No, The number ${copy} is not an Automorphic number.`);
}