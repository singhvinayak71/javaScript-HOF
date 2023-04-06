class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    getPassword() {

        let char = /[a-z]/g;
        let num = /[0-9]/g;
        let upperchar = /[A-Z]/g;

        if (this.password.length >= 8 && this.password.match(char) && this.password.match(num) && this.password.match(upperchar)) {
            this.password = "****************"
            return this.password;

        } else {
            return `Password Must be at least 8 characters long and contain at least one number and one uppercase`
        }

    }
    set passwordgetter(p) {

    }
}

// const user = new User("vinayak singh" , "Abc123")  // length err
// const user = new User("vinayak singh" , "abc123abc") //UpperCase err
const user = new User("vinayak singh", "123456789Aa") // correct password
// const user = new User("vinayak singh" , "ABCJJVHJF123") //lowerCase err

console.log(user.getPassword())