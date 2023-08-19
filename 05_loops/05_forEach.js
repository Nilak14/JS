const coding = ['js','ruby','java','C++','python']

// coding.forEach(value=>{
//     console.log(value)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((value,index,arrayList) =>{
//     console.log(value)
//     console.log(index)
//     console.log(arrayList)
// })

const myCoding = [
    {
        languageName : "Java",
        languageFileName: "java"
    },
    {
        languageName : "JavaScript",
        languageFileName: "js"
    },
    {
        languageName : "Python",
        languageFileName: "py"
    },
];

myCoding.forEach((value)=>{
    console.log(value.languageName)
})