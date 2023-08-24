let myName = 'Nilak      ';
let myCountry = "Nepal    ";




let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`)
    }
}

Object.prototype.nilak = function(){
    console.log("Nilak is present in all object");
}
Array.prototype.hiNilak = function(){
    console.log("Hi nilak")
}

// heroPower.nilak()
// myHeros.nilak()
// heroPower.hiNilak();
// myHeros.hiNilak();

// inheritance
const user = {
    name: "nilak",
    email: "nilakpathak14@gmail.com"
}
const teacher = {
    makeVideo: true,
}

const teachingSupport={
    isAvailiable: false
}

const taSupport = {
    makeAssignment : "Js assignmnet",
    fullTime: true,
    __proto__: teachingSupport // old syntax
}
teacher.__proto__ = user // old syntax

// modern syntax       

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object.setPrototypeOf(object to get property, object to give property)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Object.setPrototypeOf(teachingSupport,teacher)
// console.log(teachingSupport.makeVideo)


let anotherUser = "NilakPathak     "
String.prototype.trueLength = function(){
    console.log(`True lenght is ${this.trim().length}`)
}

anotherUser.trueLength();
myName.trueLength()