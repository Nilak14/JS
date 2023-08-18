//***************************Primitive*********************************
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(id === anotherid)

// ********************Reference(Non-primitive)************************
// Array, Objects, Functions

// const heros = ["IronMan","SpideMan","Captain America"];
// let myobj = {
//     name: 'Nilak',
//     age: 21
// }

// const myfun = function(){
//     console.log("Hello World");
// }

// myfun()

//=============================Type of=================================
// Number = number
// string = String
// boolean = Boolean
// null = Object
// undefined = undefined
// Symbol = Symbol
// BigInt = BigInt

// arrays = Object
// object = object
// function = function

// --------------------------Stack,Heap---------------------------
// stack = (Primitve) == returns copy
// heap = (non-primitive) == returns reference
// -----------------------------------------------------------------

// let myName = 'Nilak';
// let anotherName = "Nilak Pathak";
// anotherName = 'Nirmala'
// console.log(myName);
// console.log(anotherName);

let user1 = {
    email: "nilakpathak14@gmail.com",
    address: 'Pokhara-08'
}

let user2 = user1;
user2.address = 'haha'
console.log(user1)