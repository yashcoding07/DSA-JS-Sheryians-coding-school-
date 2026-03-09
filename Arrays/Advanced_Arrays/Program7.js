// Leetcode 75. Sort Colors
/* Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function. */

let nums = [2,0,2,1,1,0];
let i = 0, j = 0, k = nums.length - 1;

function swap(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

while(i <= k){
    if(nums[i] == 0){
        swap(nums, i++, j++);
    }else if(nums[i] == 2){
        swap(nums, i, k--);
    }else i++;
}

console.log(nums); // ans: [0,0,1,1,2,2]
