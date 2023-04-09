const arr1 = [9, 2, 6, 12, 32, 14, 34, 21, 18];

function double(int, fun){
   return fun(int)
}
function exam(num){
    const newArr = num.map(e => e * 2)
    return newArr
}


const doubleVResult = double(arr1 , exam);
console.log(doubleVResult)
