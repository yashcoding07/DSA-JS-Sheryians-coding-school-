// Sum of Digits of a number.
/* write a program that takes an integer n as input and computes the sum of the digits.
   The input number is always positive.*/

function SumOfDigits(n) {
  if (n < 10) return n;
  return (n % 10) + SumOfDigits(Math.floor(n / 10));
}

let n = 936;
let ans = SumOfDigits(n); // ans: 18
console.log(ans);
