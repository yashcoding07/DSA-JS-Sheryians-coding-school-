// Leetcode 169. Majority Element
/* Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. 
Example 1:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

// Booyer Moore's voting algorithm

let nums = [2,2,1,1,1,2,2];

let count = 1;
let ans = nums[0];

for(let i = 1; i < nums.length; i++){
    if(count == 0){
        ans = nums[i];
        count = 1;
    }else if(nums[i] != ans) count--;
    else count++;
}

console.log(ans);
