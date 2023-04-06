function getPerson(name , age){
    this.name = name;
    this.age = age;
    try{
        if(name == undefined || age == undefined){
            throw new Error("Invalid Parameter type")
        }else{
            return (`Name : ${this.name} , Age : ${this.age}`)
        }
    }catch(err){
        return err.message
    }
}


// console.log(getPerson("vinayak singh"))
console.log(getPerson("vinayak singh" , 23))