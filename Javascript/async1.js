// console.log("First operation")
// console.log("Second operation")
// setTimeout(()=>{
//     console.log("Executes after 6 seconds")
// },6000)
// let timerid = setTimeout(()=>{
//     console.log("Clear time out")
// },8000)
// clearTimeout(timerid)
// console.log("Fourth operation")
 
// let count = 1
// let intervalid = setInterval(()=>{
//     console.log("Count value is " +count)
//     count++;
//     if(count > 5) {
//         clearInterval(intervalid)
//     }
// },2000)

// function finalgreet(name, callback) {
//     // callback = greet
//     console.log("Hello " +name)
//     callback()
// }
// function greet() {
//     console.log("Good morning")
// }
// finalgreet("Krishna",greet)


// function execute(a,b,operation) {
//     //a=2, b=3 operation=add
//     return operation(a,b)
//     //add(2,3)

//     //a=4, b=5 operation=multiply
//     // multiply(4,5)
//     // 20
// }
// function add(x,y){
//     return x+y
// }
// function multiply(x,y) {
//     return x*y
// }
// let res1 = execute(2,3,add)
// console.log(res1)
// let res2 = execute(4,5,multiply)
// console.log(res2)

// Callback hell (Pyramid of doom)

// function getUser(id,cb) {
//     setTimeout(()=>cb({id,name:"alice"}),500)
// }
// function getPosts(uid,cb) {
//     setTimeout(()=>cb([{id:101, title:"Post"}]),500)
// }
// function getComments(pid,cb) {
//     setTimeout(()=>cb([{id:201, text:"Nice!"}]),500)
// }
// function getReplies(cid,cb) {
//     setTimeout(()=>cb(["Reply1","Reply2"]),500)
// }
// getUser(1,(user)=>{
//     getPosts(user.id,(posts)=>{
//         getComments(posts[0].id,(comments)=>{
//             getReplies(comments[0].id,(replies)=>{
//                 console.log("Final replies:", replies)
//             })
//         })
//     })
// })