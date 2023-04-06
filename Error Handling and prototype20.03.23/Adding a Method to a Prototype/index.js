
function Student(name){
    this.name = name
}
Object.prototype.printDetails = function(){
    // console.log( `Hello, the student is ${this.name}`)
    return `Hello, the student is ${this.name}`
}
const student = new Student("Mithun");
console.log(student.printDetails())