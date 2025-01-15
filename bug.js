function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This will cause the bug if a or b is NaN
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(NaN, 2)); // Output: 0 (Incorrect! Should be NaN)