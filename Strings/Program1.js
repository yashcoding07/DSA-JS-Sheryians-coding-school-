// Accept a String from the user and print each character in a new line.

const prompt = require("prompt-sync")();
let str = prompt("Enter the string: ");

for(let i = 0; i < str.length; i++){
    console.log(str.charAt(i).trim()); // the trim function helps in the removal of spaces on both the sides of the string.
};