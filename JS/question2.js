//  Generate Array Between Two Numbers
// Create a function to generate an array of numbers between two given values.

// generateArray.js
// Function to generate an array of numbers from start to end (inclusive)
function generateArray(start, end) {
    const result = [];
    const step = start < end ? 1 : -1;
    
    for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
        result.push(i);
    }
    return result;
}

// Example usage:
// Generate an array from 4 to 7
console.log(generateArray(4, 7)); 
// Expected output: [4, 5, 6, 7]

// Generate an array from -4 to 7
console.log(generateArray(-4, 7)); 


// Here's an explanation of the code:

// 1. The `generateArray` function creates an array of numbers from `start` to `end`, inclusive.

// 2. It initializes an empty `result` array to store the numbers.

// 3. The `step` variable determines the direction of the sequence:
   //- If `start` is less than `end`, `step` is 1 (counting up).
  // - If `start` is greater than `end`, `step` is -1 (counting down).

//4. The `for` loop iterates from `start` to `end`:
   //- The condition `step > 0 ? i <= end : i >= end` ensures the loop continues in the correct direction.
   //- It adds each number to the `result` array using `push()`.

//5. Finally, it returns the `result` array.

//6. The code includes two example usages:
   //- One generates an array from 4 to 7.
   //- Another generates an array from -4 to 7.

// This function is flexible and can generate arrays in both ascending and descending order, depending on the input values.
