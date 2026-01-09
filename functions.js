//Create a function
function firstname() {
    console.log("This is my first function")
}
firstname()

function sum(a,b) {
    // return a+b
    console.log(a+b)
}
let result = sum(9,10)
console.log(result)
console.log(sum(3,4))

//Function with default parameters
function greet(name = "Krishna") {
    console.log("Hello",name)
}
greet("Radha")
greet()

//Function expression
//A function is stored inside a variable
const add = function(a,b) {
    return a+b
}
console.log(add(5,7))

//Arrow functions
const subtract = (a,b) =>{
    return a-b
}
const subtract1 = (a,b) => a-b
console.log(subtract(7,2))
console.log(subtract1(9,2))

//Anonymous functions
//Functions without a name
// setTimeout(function(){
//     console.log("Executed after 9 seconds")
// },9000)

//Functions returning functions
function outer() {
    return function inner() {
        console.log("Inner function")
    }
}
// const outer1 = outer()
// outer1()
// outer1 function outer1()
outer()()

//Scope in functions
let x = 50
function test() {
    let x = 10
    console.log(x)
}
console.log(x)
test()

//Hoisting in functions
sayhi()
function sayhi() {
    console.log("Hello, Good morning")
}

// sayhi1()
// const sayhi1 = function() {
//     console.log("Hello, Good morning")
// }

// IIFE (Immediately invoked function expression)
(function() {
    console.log("Runs immedialtely")
})();

//Rest parameters
function sum(...numbers) {
    let total = 0
    for(let n of  numbers) {
        total+=n
    }
    return total
}
console.log(sum(1,2,3,4,5))

//this in functions
function show() {
    console.log(this)
}
show()

//Recursion
function factorial(n) {
    if(n == 1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5))