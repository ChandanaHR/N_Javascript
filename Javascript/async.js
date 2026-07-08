// async function first() {
//     return 20
// }
// first().then(msg=>{
//     console.log(msg)
// })
// let res = first()
// console.log(res)

function getnumber() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(10)
        },8000)
    })
}
async function sync1() {
    console.log("Before waiting....")
    let res = await getnumber()
    console.log(res)
    console.log("After waiting.....")
}
sync1()