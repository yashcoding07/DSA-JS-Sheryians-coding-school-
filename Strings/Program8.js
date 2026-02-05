// Character frequency in a string.
// Given a string. write a program to count and print the frequency of each alphabetic character present in the string.

let str = "Hello";
let freqarr = new Array(123).fill(0);

for(let i = 0; i < str.length; i++){
    let ascii = str[i].charCodeAt();
    freqarr[ascii] = freqarr[ascii] + 1;
}

for(let i = 0; i < freqarr.length; i++){
    if(freqarr[i] > 0){
        console.log(String.fromCharCode(i) + " -> " + freqarr[i]);
    }
}