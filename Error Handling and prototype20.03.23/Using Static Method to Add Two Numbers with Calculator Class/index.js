
class Calculator{
    static add(num1 , num2){
        this.num1 = num1;
        this.num2 = num2;
        console.log(`${num1 + num2}`)
    }
}
Calculator.add(12,22)