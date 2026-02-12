//Changing HTML Element content
const head1 = document.getElementById("head1")
console.log(head1.innerText)
head1.innerText = "Updated to Java"
console.log(head1.innerText)
head1.innerHTML = "<i>Updated to Python</i>"
console.log(head1.innerText)
console.log(head1.textContent)
head1.textContent = "<i>Updated to Go</i>"
console.log(head1.textContent)

//Changing element attributes
const image1 = document.getElementById("image1")
function changeimage() {
    let change = true
    if(change == true) {
        image1.setAttribute("src", "https://i.pinimg.com/736x/ae/e3/4d/aee34ddfd65c21d2696329a3a686a94c.jpg")
        image1.width = "300"
        image1.height = "300"
        change = false
    }
    else {
        image1.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyK8zCRoeCFhf6cvC7zh0yOhCXCD9CWYClg&s")
    }
}
// console.log(image1.getAttribute("src"))
// console.log(image1.getAttribute("alt"))
// image1.removeAttribute("alt")
const head2 = document.getElementById("head2")
function changestyle() {
    // head2.style.color = "white";
    // head2.style.backgroundColor = "black"
    // head2.style.fontSize = "65px";
    // head2.style.width = "430px";
    head2.classList.toggle("highlight")
}

//Add or remove css classes
// Add a class => Element.classList.add("classname")
// Remove a class = > Element.classList.remove("classname")
// Toggle between classes = > Element.classList.toggle("classname")


//Creating and removing elements
// Syntax: document.createElement("tagname")
const div = document.createElement("div")
div.innerText = "Hello , Good evening"
console.log(div)
document.body.appendChild(div)

const id1 = document.getElementById("para1")
const para1 = document.createTextNode("Hello JS")
id1.innerText = "Hello good morning"
console.log(id1)
id1.appendChild(para1)
document.body.appendChild(id1)

// const li1 = document.createElement("li");
// li1.textContent = "Apple"
// document.getElementById("ol1").appendChild(li1)
// const li2 = document.createElement("li");
// li2.textContent = "Mango"
// document.getElementById("ol1").appendChild(li2)
// let arr = ["apple","mango","strawberry","grapes"]
// for(let i=0;i<arr.length;i++) {
//     const li = document.createElement("li")
//     li.textContent = arr[i]
//     document.getElementById("ol1").appendChild(li)
// }

const div1 = document.createElement("div")
const span1 = document.createElement("span")
span1.textContent = "Computer science"
div1.append("Hello Hi How are you",span1)
document.body.prepend(div1)

const newitem = document.createElement("li")
newitem.textContent = "Inserted second"
const ol1 = document.getElementById("ol1")
// ol1.append(newitem)

// newitem: Inserted second
// newitem2: Inserted first - 1
const newitem2 = ol1.children[1]
console.log(newitem2)
ol1.insertBefore(newitem, newitem2)

// const list = document.getElementById("mylist")
