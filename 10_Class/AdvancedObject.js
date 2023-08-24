const Pi = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Pi)

const Tea = {
    name: "Milk Tea",
    price: 50,
    isAvailable: true,

    orderChai: function(){
        console.log('Tea not made')
    }
}

// console.log(Object.getOwnPropertyDescriptor(Tea,"name"));

Object.defineProperty(Tea,'name',{
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(Tea,"name"));

for (const [key,value] of Object.entries(Tea)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }  
}