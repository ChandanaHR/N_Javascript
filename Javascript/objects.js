//Creating an object
const obj1 = {
    "id" : 1,
    "name" :"asha",
    "qual" :"cse",
    "gender":"female"
}
console.log(obj1)

let obj2 = new Object()
obj2.id = 2
obj2.name = "ravi"
obj2.qual = "ece"
obj2.gender = "male"
console.log(obj2)

function Student(id,name,qual,gender) {
    this.id1 = id;
    this.name1 = name;
    this.qual1 = qual;
    this.gender1 = gender
}
let student1 = new Student(3, "krishna","mech","male")
console.log(student1)

class Employee {
    constructor(id,name,qual,gender) {
        this.id1 = id;
        this.name1 = name;
        this.qual1 = qual;
        this.gender1 = gender
    }
}
let emp1 = new Employee(4,"radha","ise","female")
console.log(emp1)

console.log(obj1.name)
console.log(obj1["qual"])
obj1.qual = "aerospace"
console.log(obj1)
obj1["id"] = 11
console.log(obj1)

delete obj1.id
console.log(obj1)

for(let key in obj1 ) {
    console.log(`Key is ${key} and respective value is ${obj1[key]}`)
}

//Modern methods(ES6)
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

//Nested objects
let student2 = {
    name :"anu",
    age: 23,
    marks : {
        maths: 99,
        science: 97,
        social: 98
    },
    address : {
        streetno: 3,
        pincode: 560010
    },
    greet: function() {
        console.log("Hello, Good morning", this.name)
    }
}
console.log(student2.name)
console.log(student2.marks["science"])
console.log(student2.marks.maths)
student2.greet()

//Object destructuring
let {name, age, address} = student2
console.log(name,age,address)

//Object spread and merge
let obj11 = {a:1, b:2}
let obj12 = {c:3,d:4}
// spread ...
let merge = {...obj11, ...obj12}
console.log(merge)

//Object.freeze() and Object.seal()
// Object.freeze(obj11)
// obj11.a = 10
// console.log(obj11)   //updating a value is not possible
// obj11.e = 12
// console.log(obj11)  //adding a new key value is not allowed
// delete obj11.a
// console.log(obj11)  //deletion is not possible
console.log()

Object.seal(obj11)
obj11.a = 10    
console.log(obj11)   //updating a value is possible
obj11.e = 12
console.log(obj11)  //adding a new key value is not allowed
delete obj11.a
console.log(obj11) //deletion is not possible

//Object references
console.log(obj12)
let obj13 = obj12 
obj13.d = 40
console.log(obj13)
console.log(obj12)

//Object.fromEntries()
let obj14 = [['id',1],['name','asha'],['qual','cse']]
console.log(Object.fromEntries(obj14))

//Object.defineProperty
let obj15 = {}
Object.defineProperty(obj15,'name',{
    value:"radha",
    writable:true,      //updating key
    enumerable: true,   //adding key value pair
    configurable: false  //deleting purpose
})
Object.defineProperty(obj15,'age',{
    value:26,
    writable:false,
    enumerable: true,
    configurable: true
})
console.log(obj15)
obj15["name"] = "krishna"
obj15["age"] = 27
console.log(obj15)
delete obj15.age 
console.log(obj15)