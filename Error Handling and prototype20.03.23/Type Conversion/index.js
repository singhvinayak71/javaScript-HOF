function convertToNumber(num){
    try{
        Number(num)
        if(isNaN(num)){
            // console.log("Invalid Number")
            throw new Error('Invalid Number')
        }
        console.log(num)
    }catch(err){
        console.log("Invalid Number")
    }
}
convertToNumber("hello")
convertToNumber(10)