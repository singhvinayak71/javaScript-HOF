let person = {
    firstName : "Vinayak",
    lastName : "Singh",
    ageYear : 1997,
}

function ageInDays(obj  , callback){
    const fullName = obj.firstName.concat(" " + obj.lastName);
    let age = obj.ageYear
    return callback(fullName , age)
}
// callback
function logResult(fullName , ageYear){
    
    const currentYear = new Date().getFullYear();
    const ageInDays = (currentYear - ageYear) * 365;
    console.log(`The person's full name is ${fullName} , and their age in days is ${ageInDays}`)

}

ageInDays(person , logResult)