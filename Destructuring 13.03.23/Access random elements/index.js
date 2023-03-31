
function randomNumber(...args){
    let arr = args.map(e => e)
    let a = arr[0];
    let b = arr[1];
    let lastnumber = arr[args.length-1]
    const finalArray = [a, b , lastnumber]     //first, second and lastnumber
    console.log(finalArray)
}
randomNumber(1, 9, 2, 3, 4, 5, 6)