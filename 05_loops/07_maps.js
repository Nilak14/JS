const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map(value=> value + 10)

const newNums = myNums
            .filter((nums)=> nums<5)
            .map(nums => nums + 1)
console.log(newNums)