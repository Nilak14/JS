// function multiplyBy5(num){
//     return num * 5
// }

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power = 2)
// console.log(multiplyBy5.prototype)

function createUser(username,score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is: ${this.score}`)
}

const nilak = new createUser('nilak',100);
const nepal = new createUser('nepal',50);
nilak.increment()
nilak.printMe()
