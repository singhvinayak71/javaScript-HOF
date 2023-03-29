const result = document.getElementById('result');
const text = document.getElementById('text')
const str = prompt("Enter string");

console.log(`You have writen a string that is -  ${str}`);
let arr = Array.from(str)
let arr1 = str.split(' ')
// console.log(`${arr1.length}`);

const conuntWorld = arr.map((e)=> e)
console.log(` In this string ${arr1.length} Words. or ${conuntWorld.length} Charcters`);
text.innerHTML = str;
result.innerHTML = ` In this string ${arr1.length} Words. or ${conuntWorld.length} Charcters`;