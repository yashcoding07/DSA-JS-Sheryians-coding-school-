// 771. Jewels and Stones
/* You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels. Letters are case sensitive, so "a" is considered a different type of stone from "A". 
Constraints:
1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique. */

let jewels = "aA",
  stones = "aAAbbbb";

let set = new Set();
for (let i = 0; i < jewels.length; i++) {
  let ch = jewels.charCodeAt(i);
  set.add(ch);
}

let count = 0;
for (let i = 0; i < stones.length; i++) {
  let ch = stones.charCodeAt(i);
  if (set.has(ch)) count++;
}

console.log(count);
