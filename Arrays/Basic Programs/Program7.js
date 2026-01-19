// left rotation by k elements 

let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = 2;
k = k % arr.length;
reverse(0, k - 1, arr);
reverse(k, arr.length - 1, arr);
reverse(0, arr.length - 1, arr);
console.log(arr);

// brute force
for(let j = 0; j < k; j++){
    let copy = arr[0];
    for(let i = 0; i <= arr.length - 1; i++){
    arr[i] = arr[i + 1];
}
    arr[arr.length - 1] = copy;
}

// Using extra-space

for(let i = 0; i < arr.length; i++){
    temp[i] = arr[(i + k) % arr.length];
}

// More Optimized

function reverse(i , j, arr){
    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}