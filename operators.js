// Unary operators
// let a = 5 ++, --
// ++, increment, -- decrement
let a = 5
console.log(a++) //a = a+1
console.log(++a) //a = a+1
// post increment: first value assigned , incremented
// pre increment: first increment, value assign
// a=5, a++ (a=a+1), a=5, a++, a=6
// a=6, ++a, a++ a=a+1, a7, a=7
// -- decrement: 
let b = 7
console.log(b--)
console.log(--b)
// b=7, b--, b=6
// b=6, --b b=5, b=5

// Binary operator
// Arithmetic operator +, -, *, /, %, **
let c = 10
let d = 5
console.log(c+d)
console.log(c-d)
console.log(c*d)
console.log(c/d)
console.log(c%d)
console.log(c**d) //10 to the power of 5, 10*10*10*10*10

// Assignment operator =, +=,-=,*=,/=,%=,**=
let e = 10
console.log(e+=20) // e=e+20
console.log(e-=20) // e=e-20
console.log(e*=20) //e = e*20
console.log(e/=20) //e=e/20
console.log(e**=20) //e=e**20

//Comparison operators ==, ===, !=, !==, >,<,>=,<=
let f = 20
let g = 30
console.log(f==g)
console.log(f!=g)
console.log(f>=g)
console.log(f>g)
console.log(f<=g)
console.log(f<g)
// ==, === && !=, !==
let h = "5"
let i = 5
console.log(typeof(h))
console.log(typeof(i))
console.log(h==i)
console.log(h===i)
console.log(h!=i)
console.log(h!==i)

// Logical operator
// Logical and(&&) ,      Logical or(||) ,        Logical not(!)
// true true => true     false false => false    false -> true
// true false => false   true false => true      true -> false
console.log(true && false)
console.log((true && true) || (true || false))
console.log(!false)

// Bitwise operator
// ...........128    64    32    16    8    4    2    1
// 28:            0      0    0     1     1    1    0    0
// 43:            0      0     1     0      1   0   1    1
// Bitwise and (&) 0 0->0, 1 0->0, 0 1->0, 1 1->1
let a1 = 7           //0 1 1 1
let b1 = 10          //1 0 1 0
console.log(a1&b1)   //0 0 1 0
// Bitwise or 0 0->0, 1 0->1, 0 1->1, 1 1->1
console.log(a1|b1) 
// Bitwise not (~)
// 2+1=>3   10+1=> 11
// 3+2=>5   11+10=>101
// 6+7=>13  110+111
// 1
// 1 1 0
// 1 1 1
// 1 1  0  1
console.log(~8)
// 8 -> 1 0 0 0
//            1
//      1  0  0  1
//     -9
console.log(~20)
// Bitwise XOR : ^ 1 0=>1, 0 1=>1, 0 0=>0, 1 1=>0
console.log(6^7)
    //  1 1 0
    //  1 1 1
    //  0  0  1
console.log(18^12)
// Bitwise left shift: <<
    // Syntax: (number<<how many no times)
console.log(18<<2)
//  64  32 16 8 4 2 1
//          1 0 0 1 0    => 18
//       1  0 0 1 0      =>36
//   1   0  0 1 0        =>72
console.log(64>>2)

// Special operators: 
// in: Check property existence
// console.log("leng" in "length")
// in operator wont work with primitive datatypes