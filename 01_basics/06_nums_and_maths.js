const num = 5000000;
// console.log(num.toLocaleString('en-In'));

// ----------------------Maths------------------------------------
// console.log(Math);

// console.log(Math.abs(4));

// console.log(Math.round(Math.random()*10));

const min = 10;
const  max = 20;
let randomNum = Math.floor(Math.random() * (max - min +1)) + min;
console.log(randomNum)