// 33. Search in Rotated Sorted Array
/* There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2]. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

let arr = [4, 5, 6, 7, 0, 1, 2];
let target = 0;

let first = 0;
let last = arr.length - 1;

while(first <= last){
    let mid = Math.floor((first + last) / 2);

    if(arr[mid] == target) return console.log("Target found: ", mid);
    if(arr[first] <= arr[mid]){
        if(arr[first] <= target && arr[mid] >= target) last = mid;
        else first = mid + 1;
    }else{
        if(arr[mid + 1] <= target && arr[last] >= target) first = mid + 1;
        else last = mid;
    }
}

console.log("Target not found: " + -1);