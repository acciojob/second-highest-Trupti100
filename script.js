function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Find the second element in the sorted array
    const secondHighestElement = arr[1];

    return secondHighestElement;
}

// Example usage:
const arr1 = [5, 1, 2, 3, 4];
const arr2 = [-1, -2, -3, -4, -5];
const arr3 = [];
const arr4 = [1];
const arr5 = [1, 1, 1, 1, 1];

console.log(secondHighest(arr1)); // Output: 4
console.log(secondHighest(arr2)); // Output: -2
console.log(secondHighest(arr3)); // Output: -Infinity
console.log(secondHighest(arr4)); // Output: -Infinity
console.log(secondHighest(arr5)); // Output: -Infinity
