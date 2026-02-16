// 2418. Sort the People
/*You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
For each index i, names[i] and heights[i] denote the name and height of the ith person.
Return names sorted in descending order by the people's heights. */

let names = ["Mary", "John", "Emma"];
let heights = [180, 165, 170];
let map = new Map();

for (let i = 0; i < names.length; i++) {
  map.set(heights[i], names[i]);
}
let ans = new Array(heights.length);
heights.sort((a, b) => b - a);

for (let i = 0; i < heights.length; i++) {
  ans[i] = map.get(heights[i]);
}

console.log("Sorted names according to height: " + ans);
