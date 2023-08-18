 // const tinderUser = new Object();
 // console.log(tinderUser)

// const obj1 = {1:"a", 2:"b"};
// const obj2 = {3:"d", 4:"e"};

// const obj3 = {...obj1 , ...obj2}
// console.log(obj3)

// Destructring 

const course = {
    coursename: "Js-50Days",
    price: "999",
    courseInstructor: "hitesh"
};

// course.courseInstructor
const {courseInstructor: i, price: p} = course
console.log(p);
