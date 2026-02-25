// Reverse of digits using recursion.

function reverse(n, rev) {
  if (n == 0) return rev;
  return reverse(Math.floor(n / 10), rev * 10 + (n % 10));
}

let n = 891;
let rev = 0;
console.log(reverse(n, rev)); // ans: 198
