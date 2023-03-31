const array = [1, 2, 3, 2, 3, 4, 90, 3, 2, 5];

const uniqueSet = new Set(array);

const backToArray = [...uniqueSet];
// console.log(uniqueSet)
console.log(backToArray)