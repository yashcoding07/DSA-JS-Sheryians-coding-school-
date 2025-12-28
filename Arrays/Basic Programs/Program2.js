// Write a program to find the greatest element in an array and print it's value along with it's index. The index should be zero based.

let arr = [5, 3, 8, 10, 91, 1];
let max = arr[0];
let index = 0;

for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
        index = i;
    }
}

console.log("Greatest element: " + max);
console.log("index of the greatest element: " + index);