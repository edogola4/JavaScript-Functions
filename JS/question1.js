// Swap Case Function
// Create a function to swap the case of each character in a string.
function swapCase(str) {
  let swappedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase()) {
      swappedStr += char.toLowerCase();
    } else {
      swappedStr += char.toUpperCase();
    }
  }
  return swappedStr;
}
console.log(swapCase('hELLO wORLD'));
console.log(swapCase('JavaScript Is Fun'));
console.log(swapCase('I love JavaScript'));