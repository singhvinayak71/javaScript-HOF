// console.log(num1)        // ReferenceError: num1 is not defined
// console.log(num2)        // ReferenceError: num2 is not defined
// console.log(num3);          // undefined

{
    let num1 = 10;
    const num2 = 20;
    var num3 = 30;
}

// console.log(num1)       //ReferenceError: num1 is not defined
// console.log(num2)           //ReferenceError: num2 is not defined
console.log(num3);      //30