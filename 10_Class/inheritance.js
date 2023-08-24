class User  {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1 = new User("owseeka");
const teacher1 = new Teacher('nilak','nilak@gmail.com','abc')
// console.log(stu)
teacher1.addCourse()
teacher1.logMe()
user1.logMe()

console.log(teacher1 instanceof User)