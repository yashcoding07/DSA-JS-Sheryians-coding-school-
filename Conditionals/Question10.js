// Check if the voter is a valid voter.
// write a program that takes age and name as input and checks whether the user is a valid voter.
// hint: The user whose age is 18 or above is a valid voter.

const prompt = require("prompt-sync")();
const age = parseInt(prompt("Enter Your age: "));
const name = prompt("Enter your name: ");

if(age >= 18){
    console.log(name + " is a valid voter.");
}else{
    console.log(name + " is not a valid voter.");
};