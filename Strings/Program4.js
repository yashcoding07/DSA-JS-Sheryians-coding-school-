// Palindromic String (in place)
// Your task is to check if a string is a pallindrome. A string is pallindorme if it reads same both the ways forwards and backwards, if string is a pallindrome print "YES" if not print "NO". just the change is you are not allowed to use a new variable for it.

const prompt = require("prompt-sync")();
let str = prompt("Enter a String: ");
let isPalindrome = true;
let i = 0, j = str.length - 1;

while(i < j){
    if(str[i] != str[j]){
        isPalindrome = false;
        break;
    }else{
        i++;
        j--;
    }
}

if(isPallindrome) console.log("Yes, the given string is a palindrome.");
else console.log("No, the given string is not a palindrome.");