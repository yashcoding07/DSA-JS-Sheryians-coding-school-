// Capitalize First and Last Character of each word.
// Given a space-separated sentence, task is to split the words into an array and capitalize first and last letters of each word in the sentence.

let str = "Hello bhai kaise ho";
let words = str.split(" "); // split method returns a array according to the dependency given in the braces.
let ans = "";

for(let i = 0; i < words.length; i++){
    if(words[i].length <= 2){
        ans = ans + words[i].toUpperCase() + " ";
    }else{
        ans = ans + words[i].charAt(0).toUpperCase() 
                  + words[i].substring(1, words[i].length - 1)
                  + words[i].charAt(words[i].length - 1).toUpperCase() + " ";
    }
}

console.log(ans);