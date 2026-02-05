// Check if two strings are anagrams.
// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.Two words are considered anagrams if: *they are of equal length, *They have the same frequency of each character.

let s1 = "arc";
let s2 = "car";
let freqarr = new Array(123).fill(0);
let isAnagram = true;

for(let i = 0; i < s1.length; i++){
    let ascii = s1[i].charCodeAt();
    freqarr[ascii] = freqarr[ascii] + 1;
}

for(let i = 0; i < s2.length; i++){
    let ascii = s2[i].charCodeAt();
    freqarr[ascii] = freqarr[ascii] - 1;
}

for(let i = 0; i < freqarr.length; i++){
    if(freqarr[i] != 0){
        isAnagram = false;
        break;
    }
}

if(isAnagram) console.log("Yes, given strings are anagrams.");
else console.log("No, given strings are not anagrams.");