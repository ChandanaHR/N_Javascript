let str1 = "chandu"
let str2 = 'chandu'
let str3 = `chandu`
let str4 = new String("chandu")
console.log(typeof(str1))
console.log(typeof(str2))
console.log(typeof(str3))
console.log(typeof(str4))

console.log(str1)
console.log(`${str2}`)

console.log(str1.length)

//Basic string methods
//charAt(index)
let str5 = "Helelloellworelld"
console.log(str5.charAt(4))
console.log(str5.charAt(-2)) //doesn't support negative indexing
console.log(str5.at(-2))
console.log(str5.charCodeAt(3))

console.log(str5.toLowerCase())
console.log(str5.toUpperCase())

console.log(str5.length)
// let str6 = str5.trim()
// console.log(str5.trim())
// console.log(str6.length)
console.log()
let str7 = str5.trimStart()
console.log(str7)
console.log(str7.length)
let str8 = str5.trimEnd()
console.log(str8)
console.log(str8.length)

//indexOf(substring)
// abcd  
// 1 length substring - a , b , c , d = 4
// 2 length substring - ab, bc, cd    = 3
// 3 length substring - abc, bcd      = 2
// 4 length substring - abcd          = 1
console.log(str5.indexOf("ell"))
console.log(str5.lastIndexOf("ell"))
console.log(str5.includes("e"))

let str11 = "Java and Javascript is easy"
console.log(str11.startsWith("Java"))
console.log(str11.endsWith("Java"))
console.log(str11.endsWith("sy"))

console.log(str11.slice(3,10))
console.log(str11.slice(10,3))
console.log(str11.slice(-10,-3))
console.log(str11.slice(-3,-10))
// 3<10 4<10 5<10 6<10 7<10 8<10 9<10 
// -10-(-1) = -9

// 0 1
// H e l l o  w o r l d

// console.log(str5.charCodeAt(-2))

// let arr =  [1,2,3,4]
// console.log(arr[-1])
console.log("22/05/2026")
console.log(str11.substring(1,7))
let str12 = "apple,banana,grapes,orange"
console.log(str12.split("a"))
let str13 = "Java is easy, Javasript is also easy"
console.log(str13.replace("Java","Python"))
console.log(str13.replaceAll("Java","Python"))
console.log(str12.concat("*", str13))
// console.log(str12)
console.log((str12+" ").repeat(3))
// Syntax: padStart(targetlength, padstring)
//         padEnd(targetlength,padstring)
let str14 = "5"
console.log(str14.padStart(5,"abc"))
console.log(str14.padEnd(8,"fd"))