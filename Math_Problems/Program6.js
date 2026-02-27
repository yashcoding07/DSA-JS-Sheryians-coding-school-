// Find the factors of the number.
/* given an positive integer n find and print all the factors of n in ascending order */

let n = 6;

for(let i = 1; i <= n; i++){
    if(n % i == 0) console.log(i);
}
