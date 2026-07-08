// const a = 14
let arr1 =[1,2,3,4,5]
console.log(arr1)
console.log(typeof(arr1))
let arr2 = ["god",12, 14.5, true]
console.log(arr2)
console.log(typeof(arr2))

console.log(arr1.length)
console.log(arr2.length)

console.log(arr1[0])
console.log(arr2[5])
console.log(arr1[-1])
console.log(arr2[-3])

arr1[0] = 10
console.log(arr1)

for(let item of arr1){
    console.log(item)
}
for(let i=0;i<arr1.length;i++) {
    console.log(arr1[i])
}

//Basic array methods
//arrayname.push(ele)
arr1.push(100)
console.log(arr1)
//arrayname.unshift(ele)
arr1.unshift(200)
console.log(arr1)
//arrayname.pop()
arr1.pop()
console.log(arr1)
//arrayname.shift()
arr1.shift()
console.log(arr1)
let res = arr1.indexOf(40)
console.log(res)
console.log(arr1.includes(90))

arr1.forEach((value,index)=>{
    console.log(`${index} and ${arr1[index]} and ${value}`)
})

//Transforming array methods
let arr3 = [1,2,3,4,5,6]
let arr4 = [7,8,9,10]
let squares = arr3.map(n=>n*n)
console.log(arr3)
console.log(squares)

let filter = arr3.filter(n=>n%2==0)
console.log(filter)

//reduce
let sum = arr3.reduce((acc,curr) => acc+curr,1)
console.log(sum)
// acc = 0, curr = 0 acc = 0
// curr=1    acc=acc+curr acc=0+1=1       acc=1 
// curr=2    acc=acc+curr acc=1+2=3       acc=3 
// curr=3    acc=acc+curr acc=3+3=6       acc=6 
// curr=4    acc=acc+curr acc=6+4=10      acc=10 
// curr=5    acc=acc+curr acc=10+5=15     acc=15 
// curr=6    acc=acc+curr acc=15+6=21     acc=21
let result1 = arr3.concat(arr4)
let result2 = arr4.concat(arr3)
console.log(result1)
console.log(result2)

let arr5 = [1,2,3,4,5,6,7,8,9,10]
let subarray1 = arr5.slice(-5,-1)
console.log(subarray1)
console.log()

// Syntax: arrayname.splice(startindex,deletecount, item1, item2, item3... )
let subarray2 = arr5.splice(2, 3, 34, 35, 36, 37)
console.log(subarray2)
console.log(arr5)

// Nested array
let arr6 = [1,[2,3],4,[[5,6,7],[8,9,10]],11,[[12,[13,14]],15,16,17]]
console.log(arr6.flat())

//Sorting and reversing
// let fruits = ["apple","cherry","watermelon","muskmelon","banana","kiwi"]
// fruits.sort()
// fruits.reverse()
// console.log(fruits)
// -ve no need of swap 
// +ve swap
let numbers = [40,100,1,30, 120, 2,10]
numbers.sort((a,b)=>b-a)
// a=40 b=100 40-100 = -60 [40 100 1 30 120 2 10]
// a=100 b=1  99           [40  1 100 30 120 2 10]
// a=100 b=30  70          [40  1  30  100 120 2 10]
// a=100 b=120 -20         [40  1 30   100 120 2 10]
// a=120 b=2   118         [40  1 30   100  2 120 10]
// a=120 b=10  110         [40  1 30 100 2 10 120]
console.log(numbers)

//Advanced array methods
let arr15 = [10,20,30,30,40,50,60]
console.log(arr15.find(n=>n<25))
console.log(arr15.findIndex(n=>n==30))
console.log(arr15.findLastIndex(n=>n==30))
console.log(arr15.some(n=>n<20))
console.log(arr15.every(n=>n<=30))
// console.log(arr15.fill(100,0,4))
console.log(arr15)
console.log(arr15.copyWithin(1,0,3))

console.log(Array.from('abc'))
console.log(Array.of('abc','def'))

//Array destructuring
let[a,b] = arr15 
console.log(a,b)

let arr16 = [10,20]
let[a1,b1,c1=60] = arr16 
console.log(a1,b1,c1)

let arr17 = [arr16, [45,36]]
            //  [ [10,20],45,36 ]
            //   [10,20,45,36]
console.log(arr17)

let arr18 = [...arr16, ...arr15, 67, 89]
            // [10,20,10,10,20,30,40,50,60,67,89]
console.log(arr18)


// let exp = [6,7,8,1,2,3,8,9,10]
// let salary = [60000,80000,............]
