// // First-way
// const promiseOne = new Promise((resolve,reject)=>{
//     //Do an async task
//     //DataBase(DB) calls, network call
//     setTimeout(()=>{
//         console.log("Async Task is completed")
//         resolve()
//     },1000)
// });

// promiseOne.then(()=>{
//     console.log('Promise Consumed');
// })

// // Second Way => SortMethod
// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Async task 2")
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("Async 2 resolved")
// })

// // how to pass value
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({userName:"Nilak",email:"nilakpathak14@gmail.com"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user)
// })


// Handle Reject 
// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({userName:"Nilak",password:"123"})
//         }
//         else{
//             reject("ERROR! Something Went Wrong")
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.userName
// })
// .then((name)=>{
//     console.log(name)
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log('The promise is either resolved or rejected')
// })


// Using Async Await 
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({userName:"JavaScript",password:"123"})
//         }
//         else{
//             reject("ERROR! JS Went Wrong")
//         }
//     },1000)
// })

// async function consumedPromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumedPromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error)
//     }
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((user)=>{
//     return user.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

