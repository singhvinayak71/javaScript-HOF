const person =
{
    name: "Mithun",
    age: 21,
    address: {
        streat: "B8 , block B Indrustrail Area",
        city: "Noida",
        state: "Uttar Predesh"
    }
}


function nestedFun(...args) {
    console.log(args);
    
    return args.forEach((e) => {
        console.log(`Person name is = ${e.name}`)
        console.log(`And his streat is = ${e.address.streat}`)
    })

}


nestedFun(person)


// console.log(person)
