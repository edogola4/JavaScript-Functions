//  Generate Array Between Two Numbers
// Create a function to generate an array of numbers between two given values.

// generateArray.js
function generateArray(start, end) {
    const result = [];
    const step = start < end ? 1 : -1;
    for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
        result.push(i);
    }
    return result;
}
// Example usage:
console.log(generateArray(4, 7)); 
console.log(generateArray(-4, 7)); 
