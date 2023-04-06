class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetail() {
        try {
            if (this.name == undefined || this.age == undefined) {
                this.name = "Unknown";
                this.age = 0
                throw new Error(`Name : Unknown , Age : 0`)
            }
            else {
                return (`Name : ${this.name} , Age : ${this.age}`)
            }
        } catch (err) {
            return err.message
        }
    }

}

const person1 = new Person("Vinayak", 26)
console.log(person1.getDetail())

const person2 = new Person();
console.log(person2.getDetail())
