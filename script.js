function firstWord(str) {
  // Trim leading spaces
  str = str.trimStart();

  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');

  // If there's no space, return the whole string
  if (spaceIndex === -1) {
    return str;
  }

  // Return substring from start to the first space
  return str.substring(0, spaceIndex);
}

// Example usage:
console.log(firstWord('see and stop'));    // Output: 'see'
console.log(firstWord(' Hello World!'));   // Output: 'Hello'
console.log(firstWord('12345'));           // Output: '12345'
console.log(firstWord(''));                // Output: ''
