// 448. Find All Numbers Disappeared in an Array
/*Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6] */

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

let ans = [];
let i = 0;

while (i < nums.length) {
  let correctIdx = nums[i] - 1;
  if (nums[i] != nums[correctIdx]) {
    let temp = nums[i];
    nums[i] = nums[correctIdx];
    nums[correctIdx] = temp;
  } else i++;
}

for (let j = 0; j < nums.length; j++) {
  if (j + 1 != nums[j]) {
    ans.push(j + 1);
  }
}

console.log(ans); // ans = [5, 6]
