// Leetcode 42. Trapping Rain Water
/* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. 
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/

let height = [0,1,0,2,1,0,1,3,2,1,2,1]

let left = new Array(height.length);
let right = new Array(height.length);
left[0] = height[0];
right[right.length - 1] = height[height.length - 1];
let maxLeft = height[0];
let maxRight = height[height.length - 1];
let ans = 0;

for (let i = 1; i < height.length; i++) {
  maxLeft = Math.max(maxLeft, height[i]);
  left[i] = maxLeft;
}

for (let i = height.length - 2; i >= 0; i--) {
  maxRight = Math.max(maxRight, height[i]);
  right[i] = maxRight;
}

for (let i = 0; i < height.length; i++) {
  ans += Math.min(left[i], right[i]) - height[i];
}

console.log(ans); // ans: 6
