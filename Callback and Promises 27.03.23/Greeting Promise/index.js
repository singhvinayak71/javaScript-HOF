function greetingMassage(name){
    return new Promise((resolve , reject) => {
        const greet = `Hello , ${name}`
        resolve(greet)
    })
}
greetingMassage("vinayak").then((massage) => console.log(massage));
// 
