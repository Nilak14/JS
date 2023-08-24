function setUsername(username){
    this.username = username
    console.log('hi')
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password;
}

const nilak = new createUser("nilak","nilakpathak14@gmail.com","1234");
console.log(nilak)