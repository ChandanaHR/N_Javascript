// let a = 5
// console.log(a++)   //a=a+1 6    a=5, a=a+1 = a=6
// console.log(a)
// // console.log(a--)   //a=a-1 4    a=6, a=a-1 = a=5
// // console.log(++a)       //    6  a=a+1 = a=6, a=6
// // console.log(--a)       //4  a=5
// // a+=1
// // a = a+1
// // a++, ++a
// let b = 7
// let c = 10
// c = b+c   //c=17
// console.log(c++) //17     c=17, c=18
// console.log(--c) //17     c=17, c=17
// b = c+c  //b=34
// console.log(++c) //17   //18 //c=18, c=18
// console.log(b++) //34   b=34, b=35
// console.log(c--) //17   //18   c=18, c=17

// // Arithmetic operators
// let d = 15
// let e = 2
// console.log(d+e)
// console.log(d-e)
// console.log(d*e)
// console.log(parseInt(d/e))
// console.log(d%e)
// console.log(d**e)

// //Assignment operator
// let f = 3
// let g = 2
// // f+=g // f=f+g
// console.log(f+=g)  //f=f+g f=5
// console.log(f=-g)  //f=f-g 5-2 = 3
// console.log(f*=g) //f=f*g = 3*2 = 6
// console.log(f/=g)  //f=f/g f=6/2 = 3
// console.log(f%=g) //f = f%g = 3%2 =1
// console.log(f**=g)  //f = f**g = 1**2

// //Comparison operator ==, ===, !=, !==, > ,<,>=,<=
// let i = true //1 
// let h = null  //0
// console.log(i==h)
// console.log(i!=h)
// console.log(i>=h)
// console.log(i<=h)
// console.log(i>h)
// console.log(i<h)
// console.log()
// let j = String(5)
// let k = 5
// console.log(j==k)
// console.log(j===k)
// console.log(j!=k)
// console.log(j!==k)

//Logical operator
// Logical and (&&), Logical or( || ), Logical Not(!)
// 1 1 = 1
// 1 0 = 1
// 0 1 = 1
// 0 0 = 0
// console.log(((true&&false)||(true&&true)) &&(!false || true) && (!!false)) 
//             //    ( false ||  true)   &&  (true) && false
//             //         true && true && false
// console.log(null || " ")
// console.log(false || "java")
// console.log(0 || 100)
// console.log("" || "abc")
// console.log(100 || 0)
// console.log("abc" || 10)
// console.log("" || false)

// and =>left side: falsy return left side value 
//      left side: truthy return right side value
//  or => left side: Falsy return right side value 
//        left side: truthy return left side value

// Bitwise operator
//          ... 128   64     32    16    8    4    2   1

// 24                              1     1    0    0   0
// 39                        1     0     0    1    1   1
// 99                  1     1     0     0    0    1   1                 
// 100                 1     1     0     0    1    0   0

// Bitwise and (&)
let a = 17
let b = 30
console.log(a^b)

// 17    1 0  0  0 1
// 30    1 1  1  1 0
//       0  1   1   1  1

// Bitwise OR (|)
//Bitwise Xor(^)
// different - one
// same - zero

// Bitwise not ~
console.log(~8)
console.log(~27)

// 8 - 1 0 0 0
//           1
//      1  0 0  1

// 27 = 1  1  0  1 1
//                 1
//       1    1  1   0    0
console.log(~-28)
console.log(~-9)

// 28 -  1 1 1 0 0
//       0  0  0  1  1
//                   1
//         0   0   1  0  0  =4
//            1   1   0  1   1 =27
// 9 - 1 0 0 1
//     0 1 1 0
//           1
//     0  1  1  1
//     1  0  0  0

// Syntax: number<<how many of number of Times 
//         number>>how many of number of times
// console.log(8<<2)
// console.log(8>>3)
console.log(16<<3)
// 16*2 = 32
// 32*2 = 64
// 64*2 = 128
console.log(32>>2)
// 32/2 = 16
// 16/2 = 8

// -(n+1) = -(-9+1) = -(-8) = 8
// 1 0 0 1
//       1
// 1  0  1  0
     






