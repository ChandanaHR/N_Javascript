const readline = require("readline");
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// r1.question("Enter your name",(name)=>{
//     r1.question("Enter your second name",(name1)=>{
//         // let num1 = Number(name)
//         console.log(typeof(name))
//         console.log(typeof(name1))
//         // console.log(typeof(num1))
//         console.log("Hello my name is ", name, " ", name1)
//         r1.close();
//     })
// })
// let str = "1 2 3 4 5"
// let values = ["1","2","3","4","5"]
// process.stdin.on("data",(input)=>{
//     console.log(typeof(input))
//     let values = input.toString().trim().split(" ");
//     let size = values.length;
//     let sum = 0;
//     console.log(size)
//     for(let i=0;i<size;i++) {
//         sum += Number(values[i])
//     }
//     console.log(sum)
// })
process.stdin.on("data",(input)=>{
    let [a,b,c] = input.toString().trim().split(" ").map(Number);
    console.log(typeof(a))
    console.log(typeof(b))
    console.log(typeof(c))
})