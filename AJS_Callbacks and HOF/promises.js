// A Promise is an object that represents the eventual completion (or failure) of an 
// asynchronous operation and its resulting value.
// States of a Promise
// A promise has 3 states:
//     Pending → The initial state, neither fulfilled nor rejected.
//     Fulfilled (Resolved) → The operation was successful, and a value is available.
//     Rejected → The operation failed, and a reason (error) is available.

// 1. Creating a promise
const mypromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success) {
        resolve("Operation successfull")
    }
    else {
        reject("Operation rejected")
    }
});
// Consuming a promise
mypromise
    .then(result=>{
        console.log(result) //Runs if resolved
    })
    .catch(error=>{
        console.error(error)
    })
    .finally(()=>{
        console.log("Promise completed")
    })
// Many modern built-in APIs return promises 
// automatically, so you don’t need to create them manually.

// Promises with setTimeout()
function wait(ms) {
    return new Promise((resolve,reject)=>{
        let success = true
        if(success) {
            setTimeout(()=>{
            resolve(`Waited for ${ms} seconds`)
        },ms)
        }
        else {
            setTimeout(()=>{
            reject(`Rejected with ${ms} seconds`)
        },ms)
        }
    })
}
wait(9000)
.then((message)=>{
    console.log(message)
})
.catch(error=>{
        console.error(error)
})
.finally(()=>{
    console.log("New promise completed")
})

// Advantages of promises: 
//     Avoids Callback Hell (Pyramid of Doom)
//     Better Error Handling caught by using catch()
//     Promises allow sequential execution of asynchronous tasks.(chaining)
//     Integration with async/await

// Disadvantages of promises:
//     Still Complex for Beginners
//     Promise Chaining Can Get Long
//     Silent Failures if .catch() is Missing
//     Not Cancelable (natively): Once started fetch() it will fetch 
//     continuously the data it wont stop

// Promise chaining example
new Promise((resolve,reject)=>{
    resolve(3)
})
.then(num=>{
    console.log("First promise: " +num);
    return num+2;
})
.then(num=>{
    console.log("Second promise: " +num);
    return num-2;
})
.then(num=>{
    console.log("Third promise: " +num);
    return num*2;
})
.then(num=>{
    console.log("Fourth promise: " +num);
    return num/2;
})
.catch(err=>{
    console.error("Error:" +err);
})