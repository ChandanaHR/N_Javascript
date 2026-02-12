// const id1 = document.getElementById("first")
// id1.style.color = "blue"
// console.log(id1)
// console.log(id1.textContent)

// const id2 = document.getElementsByClassName("second")
// console.log(id2)
// const colors = ["green","purple","red"]
// for(let i=0;i<id2.length;i++) {
//     id2[i].style.color = colors[i]
// }

// const id3 = document.getElementsByTagName("h2")
// console.log(id3)
// const obj = {
//     color: ["green","blue","purple"],
//     bgcolor: ["yellow","black","pink"]
// }
// for(let j=0;j<id3.length;j++) {
//     id3[j].style.color = obj.color[j]
//     id3[j].style.backgroundColor = obj.bgcolor[j]
// }


// const id4 = document.querySelector(".second")
// id4.style.fontSize = "50px"
// console.log(id4)
// console.log(id4.textContent)

// const id4 = document.querySelectorAll(".second")
// // id4.style.borderStyle = "solid"
// id4.forEach(item=>item.style.borderStyle = "solid")
// console.log(id4)
// console.log(id4.textContent)

//Moving up-Parent nodes
// const child1 = document.getElementById("child1")
const parent = document.getElementById("parent")
// console.log(child1.parentNode)
// console.log(child1.parentElement)
// Moving down-child nodes
console.log(parent.childNodes)
console.log(parent.children)
console.log(parent.firstChild)
console.log(parent.lastChild)
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)
//Moving sideways - Siblings
console.log(parent.nextSibling)
console.log(parent.nextElementSibling)
console.log(parent.previousSibling)
console.log(parent.previousElementSibling)
function fun1() {
    parent.nextSibling.style.color = "blue"
    parent.nextSibling.style.backgroundColor = "black"
}
function fun2() {
    parent.nextElementSibling.style.color = "purple"
    parent.nextElementSibling.style.backgroundColor = "black"
}
function fun3() {
    document.body.firstElementChild.style.color = "purple"
}
function fun4() {
    parent.previousElementSibling.style.color = "green"
    parent.previousElementSibling.style.backgroundColor = "black"
}
// Root traversal
