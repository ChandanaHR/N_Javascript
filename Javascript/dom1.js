// Syntax: document.getElementById("idname")
const first = document.getElementById("first")
console.log(first)
first.style.color = "blue"
first.style.backgroundColor = "black"

const second = document.getElementsByClassName("second")
console.log(second)
function function1() {
    // console.log(second)
    const colors = ["blue","pink","green"]
    for(let i=0;i<second.length;i++) {
        second[i].style.color = colors[i];
    }
}

const third = document.getElementsByTagName("h2")
function function2() {
    // console.log(third)
    const colors1 = ["black","yellow","red"]
    for(let i=0;i<third.length;i++) {
        third[i].style.backgroundColor = colors1[i];
    }
}

// const third = [h2 h2 h2]
// i=0 i<3 third[0] = Java = black 
// i=1 1<3 third[1] = Python = yellow
// i=2 2<3 third[2] = Csharp = red
const firstbox = document.querySelectorAll(".box")
console.log(firstbox)
// firstbox.style.color = "white"
// firstbox.style.backgroundColor = "black"
// firstbox.style.width = "600px"
// firstbox.style.border = "12px solid pink";
firstbox.forEach(item=>item.style.color="purple")
