// Compound Interest Calculation
// Accept the principle amount(P), annual interest rate(r), the number of years(t), and number of times interest is compounded per year(n), write a program to calculate the compound interest. The formula to calculate the compound interest. The formula to calculate the compound interest is:
// A = P x (1 + r/n) ^ (n * t)
// The compound interest is then calculated as CI = A - P.

const prompt = require("prompt-sync")();
const P = parseInt(prompt("Enter the principle amount: "));
const r = parseFloat(prompt("Enter the annual interest rate: "));
const t = parseInt(prompt("Enter the number of years: "));
const n = parseInt(prompt("Enter the number of times the interest is compounded: "));

let A = P * Math.pow((1 + r/n),(n * t)); // Math.pow is used for (1 + r/n) ^ (n * t) this part of the question.
let CI = A - P;

console.log("The compound interest: " + CI.toFixed(2));