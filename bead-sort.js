function beadSort(sequence) {
  // Check if the input sequence contains non-integer or negative values
  if (sequence.some(i => !Number.isInteger(i) || i < 0)) {
    throw new TypeError("sequence must be greater than 0 or be integer");
  }

  for (let _ = 0; _ < sequence.length; _++) {
    for (let i = 0; i < sequence.length - 1; i++) {
      const [rodUpper, rodLower] = [sequence[i], sequence[i + 1]];
      if (rodUpper > rodLower) {
        sequence[i] -= rodUpper - rodLower;
        sequence[i + 1] += rodUpper - rodLower;
      }
    }
  }

  return sequence;
}

console.log(beadSort([4, 7, 2, 9, 3, 6, 7])); // Output: [2, 3, 4, 6, 7, 7, 9]
