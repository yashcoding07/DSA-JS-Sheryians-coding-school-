// Linear Search algorithm
let arr = [10, 23, 24, 12, 19, 57, 83, 18];
let target = 57;
let index = -1;

for(let i = 0; i < arr.length; i++){
    if(arr[i] == target){
        index = i;
        break;
    }
}

if(index == -1) console.log("Element not found!");
else console.log("Element found at " + index + " index.");