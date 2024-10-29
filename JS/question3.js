// Filter Prime Numbers
// Create a function to filter prime numbers from an array.

// Function to check if a number is prime
function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num < 2) return false;
    
    // Check for divisibility from 2 up to the square root of the number
    // This optimization reduces the number of iterations needed
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // If the number is divisible by any i, it's not prime
      if (num % i === 0) return false;
    }
    
    return true;
  }
  
  // Function to filter an array and return only the prime numbers
  function filterPrimes(arr) {
    // containing only the elements that pass the isPrime test
    return arr.filter(isPrime);
  }
  
  // Test the filterPrimes function with an array of numbers from 1 to 10
  // The expected output is [2, 3, 5, 7] as these are the prime numbers in the range
  console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  