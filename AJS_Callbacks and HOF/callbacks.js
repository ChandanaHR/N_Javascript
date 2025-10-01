// Synchronous task → Runs line by line, blocking the code.
// In JavaScript, an asynchronous task is an operation that runs independently of the main thread (without blocking it)
// , and the result is handled later when it’s ready.
// JavaScript is single-threaded, meaning it executes one task at a time. Without asynchronous behavior, long-running tasks (like network
// requests or file reads) would freeze the browser until they finish

// Basic way to execute asynchronous fashion using Timers
// setTimeout(): Executes a function once after a specified delay (in milliseconds).
//               Non-blocking → other code continues running while waiting.
        // console.log("First")
        // setTimeout(()=>{
        //     console.log("Runs after 5 seconds")
        // },5000)
        // console.log("Third")
        // cancel setTimeout
        // let timerId = setTimeout(() => {
        //         console.log("This will NOT run");
        //  }, 3000);
        //  clearTimeout(timerId); // Cancels the timer
// setInterval(): Executes a function repeatedly at a fixed time interval (in milliseconds).
        // let count = 1;
        // let intervalid = setInterval(()=>{
        //    console.log("Message is:" +count)
        //     count++;

        //     if(count>5) {
        //         clearInterval(intervalid)
        //     }
        //  },8000)

// A callback function is simply a function passed as an argument to another function, 
// which is then executed inside that function.
// function finalgreet(name,callback) {
//     console.log("Hello " + name)
//     callback();
// }
//  function greet() {
//  console.log("Good morning")
//  }
//  finalgreet("Chandana",greet)

// Higher order function
//     A higher-order function is a function that does at least one of the following:
//         1)Takes another function as an argument (like map, filter, forEach).
//         2)Returns a function as its result (like function factories).
// Callback = function being passed
// Higher-order function = function that accepts or returns another function
// example: HOF that takes callback 1)
// function execute(a,b,operation) {
//    return operation(a,b) //execute is an higher order function
//  }
//  function add(x,y){
//    return x+y;
// }
// function multiply(x,y){
//     return x*y;
// }
// let res1 = execute(2,3,add)
// console.log(res1)
// let res2 = execute(3,2,multiply)
//  console.log(res2)
// 2) HOF returning a function
// function multiplier(factor) { //multiplier is a higher order function
//     return function(num) {
//         return num * factor;
//     };
// }

// const double = multiplier(2); 
// return function(num) {
//     return num*2;
// } 
// const triple = multiplier(3);  
// return function(num) {
//     return num*3;
// } 
// console.log(double(5)); 
// console.log(triple(4)); 
// 3) Array HOF (map , filter , reduce)
// const numbers = [1,2,3,4,5]
// const squares = numbers.map(num => num * num);
// console.log(squares)
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);
// Array.reduce(callback,initialvalue) acc=0,num=1
// 1st iteration => acc=0, num=1, newacc = 1
// 2nd iteration => acc=1, num=2, newacc = 3 continues

// async operations using callback
// setTimeout(() => {
//     console.log("This runs after 2 seconds");
// }, 200);

// Advantages: 
//     A1.Event Handling in Web Pages
//     When you click a button, you don’t know when it will happen. 
//     You give JavaScript a callback that runs when the event occurs.
        // A2.Asynchronous Operations (setTimeout, setInterval)
        // Callbacks let you run code after a delay or repeatedly.
        // A3.Reading Data from a Server (AJAX / Fetch / APIs)
        // A4. File I/O in Node.js
// Disadvantages:
    // D1.Callback hell (Pyramid of Doom)
    // D2.Harder to Debug & Maintain
    // D3. Inversion of control:When you pass a callback to another function,
    //  you’re trusting that function to call your callback correctly.
    // If the library doesn’t call it properly (or calls it multiple times), bugs occur.
// function createuser(id) {
//     return {id, name:"chandu"}
// }
// function getuser(id, cb) {
//     setTimeout(()=>{
//         const user = createuser(id);
//         cb(user)
//     },5000)
// }
// function display(user) {
//     console.log("User name is: " +user.name+ " with id:" +user.id)
// }
// getuser(1,display) //display is a callback function

//shortcut form
function getuser(id,cb) {
    setTimeout(()=>cb({id,name:"krishna"}),6000)
}
getuser(2, (user)=>{
    console.log(user.id+" "+user.name)
})

// Mock functions: Callback hell
function getUser(id, cb) { 
    setTimeout(() => cb({id, name: "Alice"}), 500); 
}
function getPosts(uid, cb) { 
    setTimeout(() => cb([{id: 101, title: "Post"}]), 500); 
}
function getComments(pid, cb) { 
    setTimeout(() => cb([{id: 201, text: "Nice!"}]), 500); 
}
function getReplies(cid, cb) { 
    setTimeout(() => cb(["Reply1", "Reply2"]), 500); 
}
getUser(1, (user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0].id, (comments) => {
            getReplies(comments[0].id, (replies) => {
                console.log("Final Replies:", replies);
            });
        });
    });
});