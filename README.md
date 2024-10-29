# JavaScript-Functions

This repository contains solutions to three JavaScript functions that demonstrate case swapping, array generation, and prime number filtering. Each solution is saved in a separate file to maintain code clarity.

## Table of Contents
- [Project Description](#project-description)
- [Getting Started](#getting-started)
- [Functions Overview](#functions-overview)
  - [Swap Case](#swap-case)
  - [Generate Array Between Numbers](#generate-array-between-numbers)
  - [Filter Prime Numbers](#filter-prime-numbers)
- [Running the Project in the Terminal](#running-the-project-in-the-terminal)
- [Troubleshooting](#troubleshooting)

## Project Description

This project includes three JavaScript functions, each solving a unique problem:
1. Swapping the case of each character in a string.
2. Generating an array of numbers between two specified values.
3. Filtering an array to include only prime numbers.

Each function is implemented in a separate file as follows:
- `question1.js` - Contains the case-swapping function.
- `question2.js` - Contains the function for generating a range of numbers.
- `question3.js` - Contains the function to filter prime numbers.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   ```
2. Navigate to the project folder:
   ```bash
   cd repository-name
   ```

## Functions Overview

### Swap Case
- **File**: `question1.js`
- **Description**: This function accepts a string and returns a new string with the case of each character swapped.
- **Example**:
  ```javascript
  swapCase('The Quick Brown Fox'); // Output: 'tHE qUICK bROWN fOX'
  ```

### Generate Array Between Numbers
- **File**: `question2.js`
- **Description**: This function accepts two numbers and generates an array of numbers within that range, inclusive.
- **Example**:
  ```javascript
  generateArray(4, 7); // Output: [4, 5, 6, 7]
  generateArray(-4, 7); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
  ```

### Filter Prime Numbers
- **File**: `question3.js`
- **Description**: This function accepts an array of numbers and returns a new array containing only the prime numbers.
- **Example**:
  ```javascript
  filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Output: [2, 3, 5, 7]
  ```

## Running the Project in the Terminal

To run each JavaScript file in the terminal, follow these steps:

1. **Navigate to the Project Directory**:
   ```bash
   cd /path/to/your/project
   ```

2. **Run Each JavaScript File**:
   - For `question1.js`:
     ```bash
     node question1.js
     ```
   - For `question2.js`:
     ```bash
     node question2.js
     ```
   - For `question3.js`:
     ```bash
     node question2.js
     ```

## Troubleshooting

- **Cannot find module error**: Ensure you're in the correct directory and that the file names are correct.
- **Listing files in the directory**: Use `ls` to check the available files:
  ```bash
  ls
  ```
- **Running with a full path**: You can specify the full path if necessary:
  ```bash
  node /path/to/your/project/filename.js
  ```

## License

This project is licensed under the MIT License.

---
