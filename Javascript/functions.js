// function firstfunc() {
//     console.log("This is my first function")
// }
// firstfunc()

// function sum(a,b) {
//     return a+b
// }
// let result = sum(9,10)
// console.log(result)
// console.log(sum(5,6))

// //Function with default parameters
// function greet(name="Krishna") {
//     console.log("Hello",name)
// }
// greet("Radha")
// greet()

// //Function expression
// // const a = 10
// const add = function(a,b) {
//     return a+b
// }
// console.log(add(5,7))

// //Arrow functions
// const subtract = (a,b) => {
//     return a-b
// }
// console.log(subtract(7,4))

// const multiply = (a,b) => a*b 
// console.log(multiply(2,3))

// //Anonymous functions
// // setTimeout(function() {
// //     console.log("Executed after 8 seconds")
// // },8000)

// //Functions returning functions
// function outer() {
//     return function inner() {
//         console.log("Inner function")
//     }
// }
// const outer1 = outer()
// // const outer1 = function inner() {}
// outer1()
// // outer()()

// //Scope in functions
// let x = 50
// function test() {
//     let y = 10
//     console.log(y)
// }
// console.log(x)
// // console.log(y)
// test()

//Hoisting in functions
// sayhi()
// function sayhi() {
//     console.log("Hello, Good morning")
// }

// sayhi1()
// const sayhi1 = () => {
//     console.log("Hello, Good night")
// }

//IIFE
// (function() {
//     console.log("Running immediately")
// })();

//Rest parameters
// function sum(...numbers) {
//     // numbers = [1,2,3,4,5,6,7,8,9,10]
//     let total = 0;
//     for(let n of numbers) {
//         total+=n
//     }
//     return total
//     // return a+b+c+d+e
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10))

//this in functions
function show() {
    console.log(this)
}
show()

//Recursion
// 5! = 5*4*3*2*1 = 120
// function factorial(n) {
//     if(n==1) {
//         return 1;
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(15))
                    //     console.log(factorial(5))  =120
                    //            n=5 
                    // return 5*factorial(4) = 24
                    //              n=4 
                    //              return 4*factorial(3) = 6
                    //                          n=3
                    //                          return 3*factorial(2) = 2
                    //                                     n=2 
                    //                                     return 2*factorial(1) = 1 
                    //                                                n=1
                    //                                                return 1 

