// Given an array of 0's and 1's, move all the zeros to the left of an array. 

let arr = [1, 0, 0, 1, 1, 0];
let i = 0; j = 0;

while(i < arr.length){
    if(arr[i] == 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}

console.log(arr);