// Check if a number is a strong number
// A number is called a strong number if the sum of the factorial of it's digits is equal to the number itself.
// write a program that accepts a number and checks if it is a strong number.
// if n is a strong number, print "yes", otherwise print "no".

const prompt = require('prompt-sync')();
let num = prompt("Enter the number: ");
let copy = num;
let ans = 0;

while(num > 0){
    let rem = num % 10;
    let fact = 1;
    for(let i = 1; i <= rem; i++){
        fact = fact * i;
    }
    ans = ans + fact;
    num = Math.floor(num/10);
}

if(copy == ans){
    console.log(`Yes, The number ${copy} is a strong number.`);
}else{
    console.log(`No, The number ${copy} is not a strong number.`);
}
