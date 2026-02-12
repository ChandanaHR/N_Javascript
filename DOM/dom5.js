const parent = document.getElementById("parent")
const button = document.getElementById("button")
// parent.addEventListener("contextmenu",()=>{
//     console.log("Cursor Right clicked")
// })
// document.addEventListener("wheel",(e)=>{
//     if(e.deltaY > 0) {
//         console.log("Scrolling down")
//     }
//     else {
//         console.log("Scrolling up")
//     }
// })
// button.addEventListener("mousedown",(e)=>{
//     if(e.button === 0) {
//         console.log("Left clicked")
//     }
//     else if(e.button === 1) {
//         console.log("Middle clicked")
//     }
//     else {
//         console.log("Right clicked")
//     }
// })
document.addEventListener("keyup",(e)=>{
    console.log(e.key)
})
document.addEventListener("keydown",(e)=>{
    switch(e.key) {
        case "ArrowUp": console.log("Move up")
                        break;
        case "ArrowDown": console.log("Move down")
                        break;
        case "ArrowLeft": console.log("Move left")
                        break;
        case "ArrowRight": console.log("Move Right")
                        break;
    }
})