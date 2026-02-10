//leetcode 1832. Check if the Sentence Is Pangram
/* A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
1 <= sentence.length <= 1000
sentence consists of lowercase English letters.
*/

let sentence = "thequickbrownfoxjumpsoverthelazydog";
let set = new Set(sentence);

if (set.size == 26) console.log("True");
else console.log("False");
