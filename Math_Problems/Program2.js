// Leetcode 1979. Find Greatest Common Divisor of Array
/* Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers. 
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.
*/

function GCD(a, b) {
  if (b == 0) return a;
  return GCD(b, a % b);
}

let nums = [2, 5, 6, 9, 10];
let min = Math.min(...nums);
let max = Math.max(...nums);
let ans = GCD(min, max);
console.log(ans);
