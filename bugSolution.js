function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Correctly handles NaN
  } else if (a === null || b === null) {
    return 0;
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(NaN, 2)); // Output: NaN