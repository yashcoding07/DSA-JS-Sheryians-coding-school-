// GCD of two numbers
let a = 16,
  b = 24;

for (let i = Math.min(a, b); i >= 1; i--) {
  if (a % i == 0 && b % i == 0) {
    console.log(i); // ans: 8
    break;
  }
}
// time complexity = O(min(a,b))

// Euclidean Algoritms
// 1st theorem
function GCD(a, b) {
  if (a == b) return a;
  if (a > b) return GCD(a - b, b);
  return GCD(a, b - a);
}

let c = 8,
    d = 4;
ans = GCD(c, d);
console.log(ans); // 4
// Time complexity = O(max(a,b))

// 2nd Theorem

function Euclidean(a, b){
    if(b == 0) return a;
    return Euclidean(b, a % b);
}

let e = 18, f = 28;
res = Euclidean(e, f);
console.log(res); // 2
// Time complexity = O(log(max(a,b))