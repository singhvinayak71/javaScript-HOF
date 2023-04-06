class Car{
    year = 2023;
    company = "Skoda";
    model = "Rapid";
    getDescription(){
        return `this is a ${this.year} ${this.company} ${this.model}`
    }
}
const myCar = new Car()
console.log(myCar.getDescription())
