// Binary Search Algorithm
// for this algorithm the array should be sorted, 
// this algorithm is also called divide and conquer algorithm.

let arr = [10, 23, 45, 67, 100, 190, 201];
let target = 190;

if(BinarySearch(arr, target) === -1){
    console.log("Element not found");
}else {
    console.log("Element found");
}

function BinarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;
    
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] == target){
            return mid;
        }else if(arr[mid] > target){
            end = mid - 1; 
        }else {
            start = mid + 1;
        }
    }

    return -1;
}