// let a1 = 12
// let a2 = 14.5
// let a3 = 1.5e2 //1.5*10**2
// console.log(typeof(a1))
// console.log(typeof(a2))
// console.log(typeof(a3))
// let a4 = new Number(50)
// console.log(a4)
// console.log(typeof(a4))

// //Number properties 
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.NaN)

// //Number validity 
// console.log(isNaN("abc"))
// console.log(Number.isInteger(12.89))
// console.log(Number.isFinite(Infinity))

// //Type conversion
// //String->Number
// let str1 = "10abc1085454"
// let res1 = Number(str1)
// console.log(res1)
// console.log(typeof(str1))
// console.log(typeof(res1))
// let res2 = parseInt(str1)
// console.log(parseInt(res2))

// // Number->String 
// let num1 = 123.679256742132
// console.log(typeof(num1))
// let res3 = String(num1)
// console.log(typeof(res3))
// let res4  = num1.toString()
// console.log(typeof(res4))
// console.log(Number.isNaN("abc"))

// //Number methods 
// //toFixed(n)
// console.log(num1.toFixed(2))
// console.log(typeof(num1.toFixed(2)))

// console.log(isNaN(90))
// console.log(isNaN("abc"))
// console.log(Number.isNaN(90))
// console.log(Number.isNaN(true))

let num11 = 1235.456
// 123 
// 3  123 
// 2  1.23
console.log(num11.toPrecision(10))
console.log(num11.toExponential(10))

//Basic math functions 
console.log(Math.abs(-6))
console.log(Math.round(4.878123))
console.log(Math.floor(4.6))
console.log(Math.ceil(4.2))
console.log(Math.trunc(4.878123))

//Random numbers 
console.log(Math.random()*100)
// 0(inclusive) 1(exclusive)

//Boolean to Number
let b1 = Number(true)
let b2 = Number(false)
let b3 = Boolean(0)
let b4 = Boolean(1)
let b5 = Boolean(100)
let b6 = Boolean(NaN)
let b7 = Boolean(undefined)
console.log("".length)
console.log(" ".length)
let b8 = Number(" ")
let b9 = Boolean(" ")
let b10 = Number("")
let b11 = Boolean("")
console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11)

// "" -> 0 
// " " -> 0 
// "avshshga"->NaN 
// "12324"-> 12324

// 0, NaN, undefined, "", null

// Binary systems = 0 and 1 
// Octal system - 0 to 7 
// Decimal system  - 0 to 9 
// Hexadecimal system - 0 to 9 10(A) 11(B) 12(C) 13(D) 14(E) 15(F)

let num2 = 255 
console.log(num2.toString(2))
console.log(num2.toString(8))
console.log(num2.toString(10))
console.log(num2.toString(16))

console.log(Math.sign(9876))
console.log(Math.sign(-9876))
console.log(Math.sign(0))
console.log(Math.sign("abc"))