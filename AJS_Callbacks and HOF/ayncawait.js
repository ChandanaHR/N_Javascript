// async in js 
//     async is a keyword you place before a function 
//     to make it an asynchronous function.
//     An async function always returns a Promise.
        // If the function returns a value (not a Promise), 
        // JavaScript automatically wraps it inside a resolved Promise.
        // async function greet() {
        //     return "Good evening"
        // }
        // greet().then(msg=>{
        //     console.log(msg)
        // })
        // let a = greet()
        // console.log(a)
// await in js
// await can only be used inside an async function.
// It makes JavaScript wait until a Promise is resolved 
// (or rejected) before moving to the next line.
// While waiting, the function is paused but the rest of the 
// program keeps running (non-blocking).
// function getnumber() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(10)
//         },9000)
//     })
// }
// async function sync1() {
//     console.log("Before await...")
//     let num = await getnumber();
//     console.log(num)
//     console.log("After await...")
// }
// sync1()
// Error handling with async/await
// function getinfo(value) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         if(value) {
//             resolve("Data received")
//         }
//         else  {
//             reject("Failed")
//         }
//     },8000)
//     })
// }
// async function getdata() {
//     try {
//         let result = await getinfo(false);
//         console.log(result)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// getdata()
// Multiple await calls
function getnumber1() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(20)
        },2000)
    })
}
// async function multiple() {
//     let num1 = await getnumber1()
//     console.log("First number is")
//     console.log(num1)
//     let num2 = await getnumber1()
//     console.log("Second number is")
//     console.log(num2)
//     console.log("Sum is: " ,num1+num2)
// }
// multiple()
async function processParallel() {
  let [num1, num2] = await Promise.all([getnumber1(), getnumber1()]);
  console.log("Sum:", num1 + num2);
}
processParallel();