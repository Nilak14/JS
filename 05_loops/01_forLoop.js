// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for(let i = 1; i<=10;i++){
//     console.log(`5 X ${i} = ${5*i}`)
// }

// const heros = ["superman","thor","spiderman"]
// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
//     console.log(element)
// }

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log(`Detected 5`)
        continue 
    }
    console.log(`Value of i is ${index}`)
}