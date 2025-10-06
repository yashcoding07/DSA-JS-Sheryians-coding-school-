// Calculate the circumference and Area of a circle
// Accept the radius of a circle as float, write a program to calculate both the circumference and area of the circle. use the following formulas:
// Circumference C: 2.π.r
// Area A: π.r^2

const prompt = require("prompt-sync")();
const r = parseFloat(prompt("Enter the radius of the circle: "));


let C = (2 * Math.PI * r).toFixed(2);
let A = (Math.PI * Math.pow(r,2)).toFixed(2);

console.log("The circumference of the circle is " + C);
console.log("The area of the circle is " + A);
