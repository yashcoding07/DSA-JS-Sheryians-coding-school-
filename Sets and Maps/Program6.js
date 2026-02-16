// 2351. First Letter to Appear Twice
/* Given a string s consisting of lowercase English letters, return the first letter to appear twice.
Note:
A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
s will contain at least one letter that appears twice.*/

let s = "abccbaacz";
let map = new Map();

for(let i = 0; i < s.length; i++){
    let ch = s.charAt(i);
    if(map.has(ch)){
        console.log("The first letter to appear twice is " + ch);
        break;
    } 
    else map.set(ch, 1)
}
