// Reverse a String.
// You are given a string and your task is to print the string in the reverse order.

let str = "sheryians";
let rev = "";

for(let i = str.length - 1; i >= 0; i--){
    rev = rev + str.charAt(i);
};

console.log(rev);