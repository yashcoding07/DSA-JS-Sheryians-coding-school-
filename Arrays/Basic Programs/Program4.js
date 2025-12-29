// Reverse an array.

// Method 1: Using an extra space copying an array into another in reversed format.
let arr = [1, 2, 3, 4, 5, 6];
let temp = new Array(arr);
let i = 0;

for(let j = arr.length - 1; j >= 0; j--){
    temp[i] = arr[j];
    i++;
}

console.log("Reversed array: ", temp);

// Method 2: Without using extra space reversing the array in place using two pointer algorithm.

let arr2 = [1, 2, 3, 4, 5, 6];
let i2 = 0;
let j2 = arr2.length - 1;

while(i2 < j2){
    let temp = arr2[i2];
    arr2[i2] = arr2[j2];
    arr2[j2] = temp;
    i2++;
    j2--;
}

console.log("Reversed array: ", arr2);