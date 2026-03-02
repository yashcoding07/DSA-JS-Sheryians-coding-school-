// 283. Move Zeroes
/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array. 
EXAMPLE:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]*/

let nums = [0,1,0,3,12];

let lastNonZeroFoundAt = 0;

// Move non-zero elements forward
for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        nums[lastNonZeroFoundAt] = nums[i];
        lastNonZeroFoundAt++;
    }
}

// Fill remaining positions with zeros
for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
}

console.log(nums); // [1, 3, 12, 0, 0]
