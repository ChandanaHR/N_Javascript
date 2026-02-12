const btn1 = document.getElementById("btn1")
// btn1.onclick = function() {
//     alert("Button clicked")
// }

// btn1.addEventListener("click",(e)=>{
//     alert("Again button clicked")
//     console.log(e.target)
//     console.log(e.type)
// })

// btn1.addEventListener("dblclick",(e)=>{
//     alert("Again button clicked")
//     console.log(e.target)
//     console.log(e.type)
// })

// btn1.addEventListener("mousedown",(e)=>{
//     alert("Mouse button clicked",e.button)
//     console.log(e.target)
//     console.log(e.type)
// })

// btn1.addEventListener("mouseup",(e)=>{
//     alert("Mouse button up clicked")
//     console.log(e.target)
//     console.log(e.type)
// })
const box = document.getElementById("box")
const subbox = document.getElementById("subbox")
// box.addEventListener("mousedown",()=>{
//     box.style.background = "orange"
//     box.style.color = "purple"
//     box.textContent = "Mouse down"
// })
// box.addEventListener("mouseup",()=>{
//     box.style.background = "black"
//     box.style.color = "white"
//     box.textContent = "Mouse up"
// })
// box.addEventListener("mousemove",(e)=>{
//     box.style.background = "purple"
//     box.style.color = "white"
//     box.textContent = "Mouse move"
//     console.log(e.clientX, e.clientY)
// })
// box.addEventListener("mouseenter",(e)=>{
//     box.style.background = "yellow"
//     box.style.color = "red"
//     box.textContent = "Mouse enter"
//     console.log(e.clientX, e.clientY)
// })
// box.addEventListener("mouseleave",(e)=>{
//     box.style.background = "red"
//     box.style.color = "yellow"
//     box.textContent = "Mouse leave"
//     console.log(e.clientX, e.clientY)
// })
box.addEventListener("mouseenter",()=>{
    console.log("Mouseenter on parent")
})
box.addEventListener("mouseleave",()=>{
    console.log("Mouseleave on parent")
})
box.addEventListener("mouseover",()=>{
    console.log("Mouseover on parent")
})
box.addEventListener("mouseout",()=>{
    console.log("Mouseout on parent")
})