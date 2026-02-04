// Count Strings with given prefix
// Given an array of string words and a string pref, with a program to count how many strings in the array start with the given prefix. The prefix must match exactly from the string.

let strarr = ['pay', 'attention', 'practice', 'attend'];
let pref = 'at';
let count = 0;

for(let i = 0; i < strarr.length; i++){
    if(strarr[i].startsWith(pref)) count++;
}

console.log(count);