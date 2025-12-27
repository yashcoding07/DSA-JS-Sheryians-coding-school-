// Calculate Area of Triangle using Heron Formula:
// Accept the lengths of the three sides of a triangle, write a perform to calculate the area of the triangle using Heron's Formula. The formula states that if the sides of the triangle are a,b and c, then the area A is calculated as: 
// semi-perimeter = (a + b + c)/2 
// Area = sqrt of s*(s-a)*(s-b)*(s-c)
// Where s is the semi-perimeter of the triangle.

const prompt = require("prompt-sync")();
const a = parseFloat(prompt("Enter side a: "));
const b = parseFloat(prompt("Enter side b: "));
const c = parseFloat(prompt("Enter side c: "));

let s = (a + b + c)/2;
let A = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Math.sqrt() is used to calculate the square of any number.

console.log("The area of the triangle is " + A.toFixed(2));