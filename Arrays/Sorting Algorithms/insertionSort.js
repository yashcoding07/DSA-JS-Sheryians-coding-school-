// Insertion Sort
let arr = [10, 2, 13, 5, 7, 11];

console.log("Original Array: ", arr);

// Insertion Sort Algorithm 
for(let i = 1; i < arr.length; i++){
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}

console.log("Sorted Array: ", arr);