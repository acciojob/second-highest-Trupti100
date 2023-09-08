function secondHighest(arr) {
  if (arr.length < 2) {
    return -Infinity; // Not enough elements
  }

  // Sort the array in descending order
  arr.sort((a, b) => b - a);

  // Iterate through the sorted array to find the second highest element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      return arr[i]; // Found the second highest element
    }
  }

  return -Infinity; // All elements are the same
}

// Example usage:
console.log(secondHighest([5, 1, 2, 3, 4]));    // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5]));// Output: -2
console.log(secondHighest([]));                 // Output: -Infinity
console.log(secondHighest([1]));                // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1]));    // Output: -Infinity
