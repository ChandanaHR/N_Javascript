// Keywords (let, var, const)
let a = 10 
a = 30 //Syntax: keyword variablename = value
let b = 20
// let is a block scoped variable 
// its not possible to redeclare a variable once it is created
console.log(a)
console.log(b)

var c = 30
var c = 40
var c = 50
console.log(c)
// function scope 
//Its is possible to redeclare a variable

const a1 = 50
// a1 = 70
//block scope
//It is not possible to redeclare a variable


// Datatypes
// Primitve data type
// String:sequence of characters
let name1 = "Karthik"
let name2 = 'Karthik'
let name3 = `Karthik`
console.log(name1,name2,name3)
console.log(typeof(name1))
console.log(typeof(name2))
console.log(typeof(name3))
//Number: Represent any numeric value
let no1 = 12
let no2 = 3.4
let no3 = 5.6
console.log(typeof(no1))
console.log(typeof(no2))
console.log(typeof(no3))
//BigInt: For very large numbers
let big1 = 12344465897643216578964127885n
console.log(typeof(big1))
//Boolean: true or false
let bool1 = true
let bool2 = false
console.log(typeof(bool1))
console.log(typeof(bool2))
//Undefined: variable which is declared but not assigned any value
let b1;
console.log(b1)
console.log(typeof(b1))
//null: empty or no value
let b2 = null;
console.log(b2)
console.log(typeof(b2))
//Symbol: Unique value
let id1 = Symbol("id");
let id2 = Symbol("id")
console.log(id1)
console.log(id2)
console.log(id1===id2)

//Typeconversion: Implicit type c, explicit type c
// Implicit type c: automatically js does conversion
let c1 = "10"
let c2 = 5
let res1 = c1+c2 //(String+number)
let res2 = c1-c2
let res3 = c1*c2
let res4 = c1/c2
console.log(res1)
console.log(typeof(res1))
console.log(res2)
console.log(typeof(res2))
console.log(res3)
console.log(typeof(res3))
console.log(res4)
console.log(typeof(res4))

//Explicit conversion
//Converting to Number
let str1 = "abc"
console.log(typeof(str1))
let res11 = Number(str1)
console.log(typeof(res11))
// parseInt() :which is used to convert to number
let res12 = parseInt(str1)
console.log(res12)
console.log(typeof(res12))
// parseFloat()

// Convert to String
let str2 = true
console.log(typeof(str2))
let res13 = String(str2)
console.log(typeof(res13))
//toString
// Syntax: variablename.toString()
let res14 = str2.toString()
console.log(typeof(res13))

// Converting to Boolean
// Falsy values: 0, "",null, undefined,NaN, false
let str4 = "karthik"
console.log(Boolean(str4))

// String to Number: unary +
console.log(typeof(+"50"))
console.log(typeof(+"abc"))
// alert("Hello, How are you")
prompt("Take input")