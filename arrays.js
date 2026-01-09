//Creating an array
let arr1 = [1,2,3,4]
console.log(arr1)
let arr2 = ["chandu",12,true,3.4]
console.log(arr2)

console.log(arr1.length)
console.log(arr2.length)

//Updating an element in an array
arr1[0] = 11
console.log(arr1)

//Iterating over an array
for(let var1 of arr1) {
    console.log(var1, ' ')
}

//Basic array methods
// push : arrayname.push(ele)
arr1.push(5)
console.log(arr1)
// unshift: arrayname.unshift(ele)
arr1.unshift(14)
console.log(arr1)
// pop : arrayname.pop()
arr1.pop()
console.log(arr1)
// shift : arrayname.shift()
arr1.shift()
console.log(arr1)
// indexOf: arrayname.indexOf(ele)
console.log(arr1.indexOf(2))
//includes: check if element exists
console.log(arr1.includes(10))

// Iteration in arrays
console.log(arr1)
for(let i=0;i<arr1.length;i++) {
    console.log(arr1[i])
}
for(let i=arr1.length-1;i>=0;i--) {
    console.log(arr1[i])
}
for(let ele of arr1) {
    console.log(ele)
}
// forEach loop
arr1.forEach((value,index)=>{
    console.log(`${value} and value is ${arr1[index]} and final value is ${index}`)
})

//Transforming array methods
// map:
arr1[0] = 1
console.log(arr1)
let squares = arr1.map(n=>n*n)
console.log(squares)
let add1 = arr1.map(a=>a+6)
console.log(add1)

let experience = [1,6,7,8,9,10,2,3,5,11,12]
let salaries = [100,200,100,400,800,900,250,350,600,650,300]

// filter: 
let cond1 = arr1.filter(b=>b%2==0)
console.log(cond1)

//reduce
console.log(arr1)
let sum = arr1.reduce((acc,curr)=>acc*curr,1)
console.log(sum)
//acc =0, curr = 0 acc = acc+curr = 0+0 = 0
//acc=0, curr = 1, acc=acc+curr=0+1=1
//acc=1, curr=2, acc=acc+curr=1+2=3
//acc=3, curr=3, acc=acc+curr=3+3=6
//acc=6, curr=4, acc=acc+curr=6+4=10

// concat method
let arr3 = [3,4,5]
let arr4 = [5,6,7]
let resarr1 = arr3.concat(arr4)
let resarr2 = arr4.concat(arr3)
console.log(resarr1)
console.log(resarr2)

// slice method
let arr7 = [1,2,3,4,5,6,7,8]
// let subarray1 = arr6.slice(1,6)
// console.log(subarray1)

// splice method
let subarray2 = arr7.splice(3,3,34,12,11)
console.log(subarray2)
console.log(arr7)

//Nested array and flat method
let nestedarray = [1,2,[3,4],[6,7],[[8,9],[10,11]]]
console.log(nestedarray.flat(2))

//sort method
let sort1 = [12,2,10,23,11,90,7,3]
// let sortasc = sort1.sort() //strings
// console.log(sortasc)
let sortasc = sort1.sort((a,b)=>b-a)
console.log(sortasc)
// a,b = a=12, b=2 10>0 2 12 10 23 11 90 7 3
//a,b = a=12, b=10 2>0  2 10 12 23 11 90 7 3

//Advanced array methods
let demo1 = [23,12,45,67,90,30]
console.log(demo1.find(n=> n>45))
console.log(demo1.findIndex(n=> n>25))
console.log(demo1.some(n=>n>25))
console.log(demo1.every(n=>n>25))
// console.log(demo1.fill(100,1,5))
console.log(demo1.copyWithin(0,2))
console.log(Array.from('abc'))
console.log(Array.of('abc','def'))

//Nested array
let nested = [
    [1,2,3,4],  //0
    [3,4,5],    //1
    [6,7,8,9,10],  //2
    [12,11,10,9,8,7]  //3
]
console.log(nested)
console.log(nested[3][5])
for(let i=0;i<nested.length;i++) {
    for(let j=0;j<nested[i].length;j++) {
        console.log(nested[i][j])
    }
}
console.log(nested.flat())

// Array destructuring
console.log(demo1)
// let [a,b,c,d] = demo1
// console.log(a,b)
// console.log(c,d)
let demo2 = [20,34]
let[a,b,c=100] = demo2
console.log(a,b,c)

let spread1 = [10,20,30,40]
let newspread = [...spread1,50]
console.log(newspread)