const name = document.getElementById("name")
// name.addEventListener("input",(e)=>{
//     alert(e.target.value)
// })
// name.addEventListener("change",(e)=>{
//     alert(e.target.value)
// })

// const frontend = document.getElementsByClassName("agree")
// console.log(frontend)
// frontend[0].addEventListener("change",()=>{
//     alert(frontend[0].checked)
// })
// name.addEventListener("focus",(e)=>{
//     // alert(e.target.value)
//     name.style.backgroundColor= "black"
//     name.style.color = "white"
// })
// name.addEventListener("blur",(e)=>{
//     // alert(e.target.value)
//     name.style.backgroundColor= "blue"
//     name.style.color = "white"
// })
// const myform = document.getElementById("myform")
// myform.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     alert('form submitted')
// })
// myform.addEventListener("reset",(e)=>{
//     // e.preventDefault()
//     alert('form reseted')
// })
// const invalidemail = document.getElementById("email")
// invalidemail.addEventListener("invalid",()=>{
//     alert(`Invalid email`)
// })
const msg = document.getElementById("msg")
msg.addEventListener("select",()=>{
    let text = msg.value.substring(msg.selectionStart, msg.selectionEnd)
    alert(`Selected text ${text}`)
})