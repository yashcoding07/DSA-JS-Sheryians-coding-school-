// Leetcode 53. Maximum Subarray
/* Given an integer array nums, find the subarray with the largest sum, and return its sum. 
Example 1:

Input: arr = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

// Kadane's Algorithm
let arr = [-2,1,-3,4,-1,2,1,-5,4];

let sum = arr[0], maxSum = arr[0];

for(let i = 1; i < arr.length; i++){
    sum = Math.max(arr[i], sum + arr[i]);
    maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
