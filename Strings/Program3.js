// Check if a string is palindromic
// Your task is to check if a string is a pallindrome. A string is pallindorme if it reads same both the ways forwards and backwards, if string is a pallindrome print "YES" if not print "NO".

const prompt = require("prompt-sync")();
let str = prompt("Enter a String: ");
let cpstr = "";

for(let i = str.length - 1; i >= 0; i--){
    cpstr = cpstr + str[i];
}

if(cpstr == str) console.log("Yes, the string is a palindrome.");
else console.log("No, the string is not a palindrome.");