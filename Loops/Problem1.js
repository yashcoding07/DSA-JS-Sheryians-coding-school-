// Fibonacci Series using loops

let n = 5; // 0 1 1 2 3 
let first = 0, second = 1;
process.stdout.write(first + " " + second + " ");

for(let i = 0; i < n - 2; i++){
    let third = first + second;
    process.stdout.write(third + " ");
    first = second;
    second = third;
}
