const user = {
    userName : "Nilak",
    age: 21,

    welcomeMesssage: function(){
        console.log(`${this.userName}, welcome to the website`);
        console.log(this)
    }
}
// user.welcomeMesssage()
// user.userName = "sam"
// user.welcomeMesssage()  
// console.log(this);

// function chai(){
//     let userName = "hitesh"
//     console.log(this.userName);
// }
// chai()

// const chai = (num1,num2)=>{
//     return num1 + num2;
// }

const chai = (num1,num2)=> num1+num2;

console.log(chai(5,2))