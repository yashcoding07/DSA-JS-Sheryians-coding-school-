// 202. Happy Number
/* Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not. */

let n = 2;

function isHappy(n) {
    let set = new Set();

    while(true){
        let sum = 0;
        while(n > 0){
            let rem = n % 10;
            sum = sum + (rem * rem);
            n = Math.floor(n / 10);
        }
        if(sum == 1) return console.log("True");
        if(set.has(sum)) return console.log("False");
        else set.add(sum);

        n = sum;
    }

    return false;
};

isHappy(n);