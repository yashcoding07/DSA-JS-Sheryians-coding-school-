// Quick Sort
let arr = [18, 10, 5, 40, 3, 30]
quickSort(arr, 0, arr.length - 1);
console.log("Sorted array: ", arr);

function quickSort(arr, first, last){
    if(first >= last) return
    let pIndx = findPivotIndex(arr, first, last);
    quickSort(arr, first, pIndx - 1);
    quickSort(arr, pIndx + 1, last);
}

function findPivotIndex(arr, first, last){
    let pivot = arr[last];
    let i = first - 1;

    for(let j = first; j < last; j++){
        if(arr[j] < pivot){
            i++;
            swap(arr, i, j);
        }
    }
    i++;
    swap(arr, i, last);
    return i;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}