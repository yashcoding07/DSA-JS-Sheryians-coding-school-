// Toggle Alphabet Case
// Given a string consisting of both uppercase and lowercase characters you have to toggle if the letter is in uppercase convert it to lowercase and if in lowercase convert it to uppercase and if there is a special character should not be changed.

const prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let cpstr = ""

for(let i = 0; i < str.length; i++){
    let word = str.charCodeAt(i); // 97
    if(word >= 65 && word <= 90){
        word += 32;
        cpstr += String.fromCharCode(word);
    }else if(word >= 97 && word <= 122){
        word -= 32;
        cpstr += String.fromCharCode(word);
    }else{
        cpstr += String.fromCharCode(word);
    }
};

console.log(cpstr);