function secondHighest(arr) {
  if (arr.length <= 1) {
    return -Infinity;
  }

  // Sort the array in descending order
  arr.sort((a, b) => b - a);

  // Find the second element in the sorted array
  const secondHighestElement = arr[1];

  if (secondHighestElement === arr[0]) {
    return -Infinity; // All elements are the same
  }

  return secondHighestElement;
}

// Example usage:
console.log(secondHighest([5, 1, 2, 3, 4]));    // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // Output: -2
console.log(secondHighest([]));                 // Output: -Infinity
console.log(secondHighest([1]));                // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1]));    // Output: -Infinity

