// Leetcode 1089. Duplicate Zeros
/* Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note: that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything. 
EXAMPLE:
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]*/

let arr = [1,0,2,3,0,4,5,0];

let zeros = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0){
        zeros++;
    }
}

let i = arr.length - 1;
let j = (arr.length - 1) + zeros;

while(i != j){
    if(j < arr.length){
        arr[j] = arr[i];
    }
    j--;
    
    if(arr[i] == 0){
        if(j < arr.length){
            arr[j] = arr[i];
        }
        j--;
    }
    i--;
}

console.log(arr); // ans: [1,0,0,2,3,0,0,4]
