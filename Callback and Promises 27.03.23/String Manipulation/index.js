function manipulatString(str , callback){
return callback(str)
}

function logString(upperStr) {
    let result = upperStr.toLocaleUpperCase();
    return result

}
let upperCasesString = manipulatString("Hello world" , logString);
console.log(`The manipulate String is : ${upperCasesString}`)