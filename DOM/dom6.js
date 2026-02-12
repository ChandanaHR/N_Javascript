const name = document.getElementById("name")
const email = document.getElementById("email")
const output = document.getElementById("output")
const myform = document.getElementById("myform")
name.addEventListener("input",(e)=>{
    const li = document.createElement("li")
    li.textContent = e.target.value
    output.appendChild(li)
})
name.addEventListener("change",(e)=>{
    console.log("Change event triggered")
})
name.addEventListener("focus",()=>{
    name.style.backgroundColor = "black"
    name.style.color = "white"
})
email.addEventListener("focus",()=>{
    email.style.backgroundColor = "blue"
    email.style.color = "white"
})
name.addEventListener("blur",()=>{
    name.style.backgroundColor = "white"
    name.style.color = "black"
})
email.addEventListener("blur",()=>{
    email.style.backgroundColor = "white"
    email.style.color = "blue"
})
myform.addEventListener("submit",(e)=>{
    e.preventDefault()
    const message = document.createElement("h1")
    message.textContent = "Form successfully submitted"
    message.style.color = "green"
    document.body.appendChild(message)
    console.log("Form successfully submitted")
})
myform.addEventListener("reset",(e)=>{
    // e.preventDefault()
    const message1 = document.createElement("h1")
    message1.textContent = "Form successfully reseted"
    message1.style.color = "red"
    document.body.appendChild(message1)
    console.log("Form successfully reseted")
})
email.addEventListener("invalid",()=>{
    const message2 = document.createElement("h1")
    message2.textContent = "Email is required"
    message2.style.color = "red"
    document.body.appendChild(message2)
    console.log("Email is required")
})
const content = document.getElementById("content")
content.addEventListener("select",()=>{
    let text = content.value.substring(content.selectionStart,content.selectionEnd)
    console.log("Selected text",text)
})