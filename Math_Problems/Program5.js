// Leetcode 50. Pow(x, n)
/* Implement pow(x, n), which calculates x raised to the power n (i.e., xn). 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
*/

// On Leetcode there are some of the edge cases like -> The value of n can negative so, in that case we will use this return n < 0 ? 1/POW(x,n) : POW(x,n); and for n = 0 if(n == 0) return 1;

function POW(x, n) {
  if (n == 0) return 1;
  let ans = POW(x, parseInt(n / 2));
  if (n % 2 == 0) return ans * ans;
  return ans * ans * x;
}

let x = 2.00000,
  n = 10;
console.log(POW(x, n));
