const heading2 = document.getElementById("heading2")
const para1 = document.getElementById("para1")
console.log(heading2.innerText)
console.log(para1.innerText)

heading2.innerText = "Welcome to CPP"
para1.innerText = "CPP"
console.log(heading2.innerText)
console.log(para1.innerText)

para1.innerHTML = "<i>Paragraph update</i>"
console.log(para1.innerText)
console.log(para1.innerHTML)

const image1 = document.getElementById("image1")
console.log(image1.getAttribute("src"))
console.log(image1.getAttribute("id"))
console.log(image1.getAttribute("alt"))
console.log(image1.getAttribute("width"))
console.log(image1.getAttribute("height"))

function function1() {
    image1.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/050/784/890/small/cow-showing-affection-to-calf-on-farm-photo.jpg")
    image1.setAttribute("alt","newcalf")
    image1.removeAttribute("width")
    image1.removeAttribute("height")
}

function function2() {
    // heading2.style.color = "white"
    // heading2.style.backgroundColor = "black"
    // heading2.style.width = "500px"
    // heading2.style.height = "200px"
    // heading2.style.border = "25px groove purple"
    heading2.classList.add("highlight")
    para1.classList.add("highlight")
}
function function3() {
    heading2.classList.remove("highlight")
    para1.classList.remove("highlight")
}
function function5() {
    heading2.classList.toggle("highlight")
    para1.classList.toggle("highlight")
}

//Creating and removing elements
// Syntax: document.createElement("h1")
const heading1 = document.createElement("h1")
heading1.innerText = "Hello, Good morning"
console.log(heading1)