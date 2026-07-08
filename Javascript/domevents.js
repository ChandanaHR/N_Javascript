const button = document.getElementById("btn")
// button.addEventListener("click",()=>{
//     // console.log("Button clicked")
//     alert(`Button clicked`)
// })
// button.addEventListener("dblclick",()=>{
//     // console.log("Button clicked")
//     alert(`Button double clicked`)
// })
// dblclick
//mousedown event
// button.addEventListener("mousedown",()=>{
//     // console.log("Button clicked")
//     alert(`Button is pressed`)
// })
// button.addEventListener("mouseup",()=>{
//     // console.log("Button clicked")
//     alert(`Button is released`)
// })
// button.addEventListener("mousemove",()=>{
//     // console.log("Button clicked")
//     alert(`Button is hovered`)
// })

const parent = document.getElementById("parent")
const child = document.getElementById("child")
// parent.addEventListener("mouseenter",()=>{
//     // console.log("Parent element entered")
//     alert(`Parent element entered`)
// })
// child.addEventListener("mouseenter",()=>{
//     // console.log("Parent element entered")
//     alert(`child element entered`)
// })
// parent.addEventListener("mouseleave",()=>{
//     // console.log("Parent element entered")
//     alert(`Parent element left`)
// })
// child.addEventListener("mouseleave",()=>{
//     // console.log("Parent element entered")
//     alert(`child element left`)
// })
// parent.addEventListener("mouseover",()=>{
//     // console.log("Parent element entered")
//     alert(`Parent element overed`)
// })
// child.addEventListener("mouseout",()=>{
//     // console.log("Parent element entered")
//     alert(`child element overed`)
// })
// document.addEventListener("contextmenu",(e)=>{
//     alert(`Right clicked`)
// })

// button.addEventListener("mousedown",(e)=>{
//     if(e.button === 0) {
//         alert(`Left click`)
//     }
//     else if(e.button === 1) {
//         alert(`Middle click`)
//     }
//     else if(e.button === 2) {
//         alert(`Right click`)
//     }
// })

document.addEventListener("keydown",(e)=>{
    alert(e.metaKey);
})