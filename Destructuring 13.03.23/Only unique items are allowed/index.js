const array = [1, 2, 3, 2, 3, 4, 90, 3, 2, 5];

// Step 1
const uniqueSet = new Set(array);
// Set { '🐑', 1, 2, 3 }

// Step 2
const backToArray = [...uniqueSet];
console.log(uniqueSet)
console.log(backToArray)