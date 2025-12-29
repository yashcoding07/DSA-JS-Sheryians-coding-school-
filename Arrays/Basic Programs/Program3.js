// Write a program to find the second greatest element in an array.

let arr = [75, 84, 65, 98, 100, 101, 101];
let max = Math.max(arr[0], arr[1]);
let Smax = Math.min(arr[0], arr[1]);

for(let i = 2; i < arr.length; i++){
    if(arr[i] > max){
        Smax = max;
        max = arr[i]; 
    }else if(arr[i] > Smax && max != arr[i]){
        Smax = arr[i];
    }
}

console.log("Second greatest element: ", Smax);