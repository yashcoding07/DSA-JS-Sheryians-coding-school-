# DSA-JS-Sheryians-coding-school
# Time and Space Complexity (DSA Complete Guide)

## 1. What is Time Complexity?
Time Complexity is a way to **measure how the execution time of an algorithm grows** as the input size increases.

- It does **not** measure actual time in seconds
- It measures **number of operations**
- It helps compare algorithms independent of hardware

👉 Expressed using **Big-O Notation**

---

## 2. What is Space Complexity?
Space Complexity measures the **total memory used by an algorithm** as input size increases.

Includes:
- Input space
- Auxiliary (extra) space
- Recursive call stack

---

## 3. Why Time & Space Complexity Matter?
- Helps choose the **most efficient algorithm**
- Prevents **TLE (Time Limit Exceeded)**
- Critical for **interviews & competitive programming**
- Required for **scalable applications**

---

## 4. Types of Time Complexity Cases

### Best Case
Minimum time taken  
Example: Element found at first index

### Average Case
Expected time for random input

### Worst Case
Maximum time taken (most important in DSA)

---

## 5. Big-O Notation (Asymptotic Notations)

### 5.1 Big-O (O)
Worst-case complexity  
Upper bound

### 5.2 Omega (Ω)
Best-case complexity  
Lower bound

### 5.3 Theta (Θ)
Average-case complexity  
Tight bound

---

## 6. Common Time Complexities (Ordered)

| Complexity | Name | Example |
|-----------|------|--------|
| O(1) | Constant | Array access |
| O(log n) | Logarithmic | Binary Search |
| O(n) | Linear | Loop |
| O(n log n) | Linearithmic | Merge Sort |
| O(n²) | Quadratic | Nested loops |
| O(n³) | Cubic | Triple loops |
| O(2ⁿ) | Exponential | Recursive subsets |
| O(n!) | Factorial | Permutations |

---

## 7. Time Complexity Examples

### O(1) – Constant
```js
arr[0]
O(n) – Linear
for (let i = 0; i < n; i++) {
  console.log(i);
}

O(n²) – Quadratic
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}

O(log n) – Logarithmic
// Binary Search
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
}

8. Rules to Calculate Time Complexity
Rule 1: Ignore Constants
O(2n) → O(n)
O(100) → O(1)

Rule 2: Ignore Lower Order Terms
O(n² + n + 1) → O(n²)

Rule 3: Loops

Single loop → O(n)

Nested loops → O(n²)

Three nested loops → O(n³)

Rule 4: Sequential Statements
loop1(); // O(n)
loop2(); // O(n)


Total → O(n) (take the maximum)

Rule 5: Recursion

Use recurrence relation and recursion tree

9. Time Complexity of Recursive Algorithms
Example: Linear Recursion
function print(n) {
  if (n === 0) return;
  print(n - 1);
}


Time Complexity: O(n)

Space Complexity: O(n) (call stack)

10. Recurrence Relations

A recurrence relation represents time complexity of recursive algorithms.

Example:
T(n) = T(n - 1) + O(1)


Solution:

T(n) = O(n)

11. Master Theorem (Important for DSA)

Used for divide-and-conquer algorithms.

General Form:
T(n) = aT(n/b) + O(nᵏ)

Cases:

a < bᵏ → O(nᵏ)

a = bᵏ → O(nᵏ log n)

a > bᵏ → O(n^(log b a))

Example:

Merge Sort

T(n) = 2T(n/2) + O(n)


Result: O(n log n)

12. What is Space Complexity?

Space Complexity measures memory usage as input size grows.

Includes:

Input space

Auxiliary space

Recursion stack

13. Auxiliary Space

Extra space used by algorithm (excluding input).

Example:
let temp = 0; // O(1)

14. Space Complexity Examples
O(1) – Constant Space
let a = 10;
let b = 20;

O(n) – Linear Space
let arr = new Array(n);

O(n) – Recursive Stack
function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}

15. Time & Space Complexity of Data Structures
Arrays

Access: O(1)

Search: O(n)

Insert/Delete: O(n)

Space: O(n)

Linked List

Access: O(n)

Insert/Delete: O(1)

Space: O(n)

Stack

Push/Pop: O(1)

Space: O(n)

Queue

Enqueue/Dequeue: O(1)

Space: O(n)

Hash Table

Insert/Search/Delete: O(1) average

Worst Case: O(n)

Space: O(n)

Heap

Insert: O(log n)

Delete: O(log n)

Space: O(n)

16. Time Complexity of Sorting Algorithms
Algorithm	Best	Average	Worst	Space
Bubble Sort	O(n)	O(n²)	O(n²)	O(1)
Selection Sort	O(n²)	O(n²)	O(n²)	O(1)
Insertion Sort	O(n)	O(n²)	O(n²)	O(1)
Merge Sort	O(n log n)	O(n log n)	O(n log n)	O(n)
Quick Sort	O(n log n)	O(n log n)	O(n²)	O(log n)
Heap Sort	O(n log n)	O(n log n)	O(n log n)	O(1)
17. Time Complexity of Searching Algorithms
Algorithm	Time
Linear Search	O(n)
Binary Search	O(log n)
18. Amortized Time Complexity

Average time per operation over a sequence of operations.

Example:

Dynamic array resizing

Stack push/pop operations

19. Time vs Space Tradeoff

Faster algorithms often use more memory

Memory-optimized algorithms may take more time

Example:

Hashing vs Linear Search

20. How to Optimize Time & Space Complexity

Avoid unnecessary loops

Reduce nested loops

Use hashing when possible

Prefer iterative over deep recursion

Use in-place algorithms

21. Interview Tips (Very Important)

Always mention worst-case complexity

State both time and space

Explain logic before coding

Optimize step by step

22. Final Summary

Time Complexity → how fast algorithm runs

Space Complexity → how much memory it uses

Big-O notation compares growth rates

Core foundation of DSA, interviews, and competitive programming

✅ End of Time & Space Complexity Notes

---

If you want, next we can:
- Do **complexity analysis of common DSA problems**
- Add a **1-page revision cheat sheet**
- Move to **Arrays & their complexity-based problems**

Just say the word 🚀