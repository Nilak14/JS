function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("L");
    console.log("A");
    console.log("K");
}
// sayMyName()

function addTwoNumbers(num1,num2){
    return num1 + num2
}

// console.log(addTwoNumbers(5,2))

function loginUserMessage(userName){
    if(!userName){
        return "Please enter a userName"
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("Nilak"))
