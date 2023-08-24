const user = {
    userName: "Nilak",
    loginCount: 8,
    signedIn : true,
    getUserDetails: function(){
        console.log(`Got user details from ${this.userName}`)
    }

}

function users(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new users("Nilak",12,true)
const userTwo = new users("hi",20,false)

console.log(userOne)                                                                                                                                                                                                                                            
console.log(userTwo)