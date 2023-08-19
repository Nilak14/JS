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
// console.log(loginUserMessage("Nilak"))

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,600,700,800))

const user = {
    userName: 'nilak',
    age: 21
}

function handleObject(anyobj){
    console.log(`UserName: ${anyobj.userName}\nAge: ${anyobj.age}`)
}

// handleObject(user);

const arr1 = [200,400,600]

function returnSecondValue(array){
    return array[1]
}
const secondValue = returnSecondValue(arr1)
console.log(secondValue)
