const heading1 = document.getElementById("heading1")
console.log(heading1)
heading1.innerText = "Javascript tutorial"
console.log(heading1)
heading1.textContent = "CSS tutorial"
console.log(heading1)
heading1.innerHTML = "<i>Java programming<i>"
console.log(heading1)

const container = document.getElementById("container")
console.log(container.innerText)
console.log(container.textContent)

function function1() {
    const image1 = document.getElementById("image1")
    image1.setAttribute("src","https://i.pinimg.com/564x/a1/73/ce/a173cef1f0dd844dc7cd6d9543c85500.jpg")
    image1.setAttribute("alt","puppy")
    // console.log(image1.getAttribute("alt"))
    image1.removeAttribute("width")
}

function function2() {
    const heading2 = document.getElementById("heading2")
    heading2.style.color = "blue"
    heading2.style.backgroundColor = "black"
    heading2.style.fontSize = "100px"
    heading2.style.border = "12px groove purple"
}