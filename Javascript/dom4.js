const div = document.createElement("div")
div.innerText = "Hello, Good afternoon"
console.log(div)

const text = document.createTextNode("Hello, Javascript")
const para1 = document.createElement("p")
console.log(para1)
// para1.innerText = "Hello, Javascript"
// para1.innerText = text;
// console.log(para1)
para1.appendChild(text)

document.body.appendChild(div)
document.body.appendChild(para1)

// const li1 = document.createElement("li")
// const li2 = document.createElement("li")
// const li3 = document.createElement("li")
// li1.innerText = "APPLE"
// li2.innerText = "BANANA"
// li3.innerText =  "MANGO"
// document.getElementById("list").appendChild(li1)
// document.getElementById("list").appendChild(li2)
// document.getElementById("list").appendChild(li3)

const ul = document.getElementById("list")
function add() {
    const listitems = ["one","two","three","four","five"]
    for(let i=0;i<listitems.length;i++) {
        const li = document.createElement("li")
        li.innerText = listitems[i]
        ul.appendChild(li)
    }
}
function insertbefore() {
    const newitem = document.createElement("li")
    newitem.innerText = "six"
    const second = ul.children[1]
    ul.insertBefore(newitem,second)
}

div.append("Hello, Welcome",document.createElement("span").innerText="Asha")
document.body.append(div)
console.log(div)

// function add() {
//     const head1 = document.createElement("h1")
//     head1.innerText = "I am the first heading"
//     head1.style.color = "blue"
//     head1.style.backgroundColor = "yellow"
//     document.body.prepend(head1)
// }

// Element.appendChild()

// Element.insertAdjacentHTML(position, "html code")
// positions: beforebegin, afterbegin, beforeend, afterend
const box = document.getElementById("box")
box.insertAdjacentHTML("beforebegin","<p>Hello,Good morning</p>")
box.insertAdjacentHTML("afterbegin","<p>Hello,Good afternoon</p>")
box.insertAdjacentHTML("beforeend","<p>Hello,Good evening</p>")
box.insertAdjacentHTML("afterend","<p>Hello,Good night</p>")


    // const newchild = document.createElement("h2")
    // newchild.innerText = "New Content"
    const oldchild = document.getElementById("oldchild")
    // document.body.replaceChild(newchild,oldchild)


// cloneNode(true) 
const clone = document.getElementById("clone")
const copyclone = clone.cloneNode(false)
document.body.appendChild(copyclone)

function replacechild() {
    oldchild.remove()
}

const text1 = document.getElementById("text")
console.log(text1.textContent)
