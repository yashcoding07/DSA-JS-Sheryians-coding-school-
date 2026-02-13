// 1. Two Sum
/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Constraints
2 <= nums.length <= 10^4
-109 <= nums[i] <= 10^9
-109 <= target <= 10^9
Only one valid answer exists.
*/

let nums = [2, 7, 11, 15];
let target = 9;

let map = new Map();

for(let i = 0; i < nums.length; i++){
    if(map.has(target - nums[i])){ // this checks if the key exists in the map or not 
        console.log([map.get(target - nums[i]), i]); // this returns the index of the two elements 
        break;
    }else{
        map.set(nums[i], i); // this sets the value in map
    }
}
