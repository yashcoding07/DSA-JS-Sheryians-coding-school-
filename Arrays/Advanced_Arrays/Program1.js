// Leetcode 88. Merge Sorted Arrays
/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
EXAMPLE:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

let nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6];
let m = 3,
  n = 3;
let i2 = m - 1,
  j2 = n - 1,
  k2 = nums1.length - 1;

while (i2 >= 0 && j2 >= 0) {
  if (nums1[i2] > nums2[j2]) {
    nums1[k2--] = nums1[i2--];
  } else {
    nums1[k2--] = nums2[j2--];
  }
}

while (j2 >= 0) {
  nums1[k2--] = nums2[j2--];
}
console.log(nums1); // ans: [1, 2, 2, 3, 5, 6]


// same problem another variant
// Merge Sorted Array
/* You are given two sorted arrays merge them and place them in an another ans array in an non-decreasing order and print the ans array.(Note: ans array should be sorted). */

let array1 = [1, 2, 4],
  array2 = [2, 3, 7];
let ans = new Array(array1.length + array2.length).fill(0);
let i = 0,
  j = 0,
  k = 0;

while (i < array1.length && j < array2.length) {
  if (array1[i] < array2[j]) {
    ans[k++] = array1[i++];
  } else {
    ans[k++] = array2[j++];
  }
}

while (i < array1.length) {
  ans[k++] = array1[i++];
}

while (j < array2.length) {
  ans[k++] = array2[j++];
}

console.log(ans); // ans: [1, 2, 2, 3, 4, 7]

