// window.onload = function() {
//     console.log("Page fully loaded")
// }
// window.addEventListener("resize",()=>{
//     console.log("Inner width", window.innerWidth)
//     console.log("Inner Height", window.innerHeight)
// })
// window.addEventListener("scroll",()=>{
//     console.log(window.scrollY," ",window.scrollX)
// })
// window.addEventListener("focus",()=>{
//     console.log("Window is in focus")
// })
// window.addEventListener("blur",()=>{
//     console.log("Window lost focus")
// })
// window.addEventListener("beforeunload",(event)=>{
//     event.preventDefault()
//     console.log("Window unloaded")
// })
const para1= document.getElementById("para1")
const input1 = document.getElementById("input1")
para1.addEventListener("copy",(e)=>{
    console.log("Text copied")
})
para1.addEventListener("cut",(e)=>{
    console.log("Text cut")
})
input1.addEventListener("paste",(event)=>{
    console.log("Pasted text",event.clipboardData.getData("text"))
})