//Create a string
let str1 = "bharat"
let str2 = 'bharat'
let str3 = `            bharat                    `
let str4 = "my name is krishna, Hello!"
console.log(typeof(str1))
console.log(typeof(str2))
console.log(typeof(str3))
console.log(`My name is ${str1}`)
console.log("My name is",str2)
//length of the string
console.log(str1.length)
console.log(str4.length)

//Basic string methods
// charAt (index)
console.log(str3.charAt(3))
console.log(str3.charAt(-1))
//charCodeAt(index)
console.log(str3.charCodeAt(2))
//at(index)
console.log(str3.at(3))
console.log(str3.at(-1))
// toUpperCase and toLowerCase
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())
// trim () :Remove whitespace characters from both the ends
console.log(str3)
console.log(str3.length)
console.log(str3.trim())
console.log(str3.trim().length)
console.log(str3)
console.log(str3.length)
//trimStart() and trimEnd()
let start = str3.trimStart()
console.log(start)
console.log(start.length)
let end = str3.trimEnd()
console.log(end)
console.log(end.length)
//indexOf(substring)
let str5 = "abcd"
// 1 length substrings : "a","b","c", "d"  4
// 2 length substrings : "ab","bc", "cd"   3
// 3 length substrings : "abc", "bcd"      2
// 4 length substrings : "abcd"            1
// n = n+3
// n = n+1
// n = n-1 
// n = n-3
console.log(str5.indexOf("cb"))
//lastindexOf(substring)
console.log(str5.indexOf("cd"))
console.log(str5.lastIndexOf("cd"))

//includes(substring)
console.log(str5.includes("ab"))
console.log(str5.includes("ba"))

//startsWith(substring)
let str6 = "Hello World"
console.log(str6.startsWith("llo"))
console.log(str6.startsWith("Hello World"))
//endsWith(substring)
console.log(str6.endsWith("d"))
console.log(str6.endsWith("Word"))

//slice(start,end):
console.log(str6.slice(0,8))
console.log(str6.slice(-6, -1))
// H e l l o   W o r l d
// -11  -10  -9  -8  -7  -6  -5  -4  -3  -2  -1

//substring(start,end)
console.log(str6.substring(0,8))

//split(separator)
let str7 = "apple,banana,grapes,orange"
console.log(str7.split(","))
console.log(str7.split("r"))

//replace(oldvalue,newvalue)
let str8 = "I love Java, Java is easy"
console.log(str8.replace("Java","Javascript"))
//replaceAll(oldvalue,newvalue)
console.log(str8.replaceAll("Java","Javascript"))

// concat() 
let str11 = "Hello"
let str12 = "Good morning"
console.log(str11.concat("?",str12))
console.log(str12.concat("?",str11))

//repeat()
console.log((str11+" ").repeat(10))

//padStart(targetlength, padstring)
//padEnd(targetlength, padstring)
let str13 = "5"
console.log(str13.padStart(5,"ab"))
console.log(str13.padEnd(10, "cse"))