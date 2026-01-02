// write a program to perform left rotation by 1 of all the elements of an array.

let arr = [1, 2, 3, 4, 5];
let temp = arr[0];

for(let i = 0; i < arr.length-1; i++){
    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;

console.log(arr);

// write a program to perform right rotation by 1 of all the elements of an array.
let Arr = [1, 2, 3, 4, 5];
let Temp = Arr[Arr.length - 1];

for(let i = Arr.length - 1; i > 0; i--){
    Arr[i] = Arr[i - 1];
}
Arr[0] = Temp;

console.log(Arr);