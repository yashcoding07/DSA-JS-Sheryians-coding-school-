// Cyclic Sort
let arr = [8, 4, 2, 3, 6, 7, 1, 5];
let i = 0;

while(i < arr.length){
    let correctIdx = arr[i] - 1;
    if(arr[i] != arr[correctIdx]){
        let temp = arr[i];
        arr[i] = arr[correctIdx]
        arr[correctIdx] = temp
    }else i++;
}

console.log("Sorted Array: ", arr)