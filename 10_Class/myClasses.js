// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc12`
//     }
//     capitalUserName(){
//         return this.username.toUpperCase();
//     }
// }

// const nilak = new User("Nilak",'nilakpathak14@gmail.com',"pokhara")
// console.log(nilak)
// console.log(nilak.encryptPassword())
// console.log(nilak.capitalUserName())

// ==============================================================
// Behind the scene if class keyword doesnot exist
// ===============================================================
function user(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc12`
}
user.prototype.capitalUserName = function(){
    return this.username.toUpperCase()
}

const nilak = new user("Nilak",'nilakpathak14@gmail.com',"pokhara")
console.log(nilak)
console.log(nilak.encryptPassword())
console.log(nilak.capitalUserName())
