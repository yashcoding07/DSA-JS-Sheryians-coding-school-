// 34. Find First and Last Position of Element in Sorted Array
/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4] */

function binarySearch(nums, target, isStart) {
  let first = 0,
    last = nums.length - 1,
    ans = -1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (nums[mid] == target) {
      ans = mid;

      if (isStart) {
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    } else if (nums[mid] < target) first = mid + 1;
    else last = mid - 1;
  }

  return ans;
}

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

let start = binarySearch(nums, target, true);
let end = binarySearch(nums, target, false);

let ansArr = [start, end];
console.log(ansArr);
