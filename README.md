# Incorrect NaN Handling in JavaScript Function

This repository demonstrates a common, yet subtle, bug in JavaScript related to handling `NaN` (Not a Number) values.  The function `foo` is intended to add two numbers, but its handling of `null` values unintentionally affects `NaN` inputs.

The bug is described in `bug.js`.  A corrected version is provided in `bugSolution.js`.

## Bug Description

The `foo` function attempts to handle `null` inputs gracefully by returning 0. However, this check doesn't account for `NaN`, leading to the incorrect return value of 0 when one of the inputs is `NaN`.  The correct behavior is to propagate the `NaN` value.

## Solution

The corrected function in `bugSolution.js` explicitly checks for `isNaN()` to handle `NaN` appropriately. This ensures that the function returns `NaN` when either input is `NaN`, maintaining numerical correctness.