// window.addEventListener("load",()=>{
//     alert(`Window loaded successfully`)
// })
// window.addEventListener("resize",()=>{
//     // alert(`Inner width ${window.innerWidth} , Inner height ${window.innerHeight}`)
//     console.log("Inner width", window.innerWidth)
//     console.log("Inner height", window.innerHeight)
// })
// window.addEventListener("scroll",()=>{
//     // alert(`Inner width ${window.innerWidth} , Inner height ${window.innerHeight}`)
//     alert(`${window.scrollY}`)
// })
// window.addEventListener("blur",()=>{
//     // alert(`Inner width ${window.innerWidth} , Inner height ${window.innerHeight}`)
//     console.log("Window blurred")
// })
// const image1 = document.getElementById("image1")
// image1.addEventListener("error",(e)=>{
//     image1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJCXIEtxOBW8WWzCTJT6H93mRUvFbML50B63RlAY2bQ_ECDcm6s_nQrw&s=10"
//     image1.width = "300"
//     image1.height = "300"
// })
// window.addEventListener("beforeunload",(e)=>{
//     // alert(`Inner width ${window.innerWidth} , Inner height ${window.innerHeight}`)
//     // console.log("Window blurred")
//     e.preventDefault()
//    console.log("Window unloaded")
// })

const input1 = document.getElementById("input1")
const pasteinput = document.getElementById("pasteinput")
pasteinput.addEventListener("paste",(e)=>{
    alert(`pasted text is ${event.clipboardData.getData("text")}`)
}) 