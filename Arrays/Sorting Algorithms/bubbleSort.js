// Bubble Sort Algorithm
let arr = [5, 3, 1, 9, 7];
let n = arr.length;

console.log("Original Array: \n" + arr);

// This function sorts the array using the bubble sort concept.
for(let i = 0; i <= n - 1; i++){
    // n - 1 is used becoz 1 element will be already sorted if we sort others.
    for(let j = 0; j < n - i - 1; j++){
        // n - i - 1 is used becoz in every j iteration one iteration becomes less as one bubble element is already sorted.
        if(arr[j] > arr[j + 1]){
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Sorted Array: \n" + arr);