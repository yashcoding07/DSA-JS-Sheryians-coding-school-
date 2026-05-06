// 41. First Missing Positive
/* Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space. 
Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
*/

let nums = [1, 2, 0];
let i = 0;

while (i < nums.length) {
  let correctIdx = nums[i] - 1;

  if (nums[i] > 0 && nums[i] < nums.length && nums[i] != nums[correctIdx]) {
    let temp = nums[i];
    nums[i] = nums[correctIdx];
    nums[correctIdx] = nums[i];
  } else i++;
}

for (let j = 0; j < nums.length; j++) {
  if (j + 1 != nums[j]) {
    console.log(j + 1);
    return;
  }
}

console.log(nums.length + 1); // ans: 3
