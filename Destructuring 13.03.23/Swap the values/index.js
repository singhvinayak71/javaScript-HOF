// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

//create a temporary variable
// let swapValue;

// //swap variables

// swapValue = a;
// a = b;
// b = swapValue;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

let swapValue;
function swapfun(a, b) {

    swapValue = a;
    a = b;
    b = swapValue;
    console.log(`The value of a after swapping: ${a}`);
    console.log(`The value of b after swapping: ${b}`);
    let finalArray = [a , b]
    console.log(finalArray)
}
swapfun(10, 5)