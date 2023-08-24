class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const nilak = new User("nilak")
// console.log(nilak.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone","iphone@apple.com")
console.log(iphone);
