// const mypromise = new Promise((resolve,reject)=>{
//     let sucess = true;
//     if(sucess) {
//         resolve("Operation successful")
//     }
//     else {
//         reject("Operation rejected")
//     }
// })
// mypromise 
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.error(error)
// })
// .finally(()=>{
//     console.log("Promise completed")
// })
// console.log(mypromise)

// function wait(ms) {
//     return new Promise((resolve,reject)=>{
//         let success = false 
//         if(success) {
//             setTimeout(()=>{
//                 resolve(`Waited for ${ms} seconds`)
//             },ms)
//         }
//         else {
//             setTimeout(()=>{
//                 reject(`Rejected for ${ms} seconds`)
//             },ms)
//         }
//     })
// }
// wait(9000)
// .then((message)=>{
//     console.log(message)
// })
// .catch(error=>{
//     console.error(error)
// })
// .finally(()=>{
//     console.log("Promise completed")
// })

new Promise((resolve,reject)=>{
    resolve(3)
})
.then((num)=>{
    console.log("First promise " , num)
    return num+2
})
.then((num)=>{
    console.log("second promise " , num)
    return num-2
})
.then((num)=>{
    console.log("third promise " , num)
    return num*2
})
.then((num)=>{
    console.log("fourth promise " , num)
    return num/2
})
.catch(err=>{
    console.error("Error " +err)
})

