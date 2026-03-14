// Leetcode 15. 3Sum
/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets. 
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.*/

let nums = [-1, 0, 1, 2, -1, -4];

let ans = [];
nums.sort();

for (let i = 0; i < nums.length - 2; i++) {
  if (i != 0 && nums[i - 1] == nums[i]) continue;
  let j = i + 1,
    k = nums.length - 1;
  while (j < k) {
    let sum = nums[i] + nums[j] + nums[k];
    if (sum == 0) {
      let curr = [nums[i], nums[j++], nums[k--]];
      ans.push(curr);
      while (j < k && nums[j - 1] == nums[j]) j++;
      while (j < k && nums[k + 1] == nums[k]) k--;
    } else if (sum < 0) j++;
    else k--;
  }
}

console.log(ans); // ans: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
