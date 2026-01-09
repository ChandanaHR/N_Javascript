//Creating an basic object
// 1st way: creating an object by using object literal
const object1 = {
    "name":"karthik",
    "age":23,
    "qualification":"cse",
    "gender":"male"
}
console.log(object1)
// 2nd way to create an object using new Object()
let user = new Object()
user.name = "krishna"
user.age = 26
user.qualification = "ece"
user.gender = "male"
console.log(user)
// // 3rd way to create an object is by constructor function
function Student(name,age,qualification,gender) {
    this.name1 = name;
    this.age1 = age;
    this.qualification1 = qualification;
    this.gender1 = gender
}
let student1 = new Student("chandu",26,"it","female")
console.log(student1)
// // 4th way to create an object is by using classes (ES6)
class Employee {
    constructor(name,age,qualification,gender) {
        this.name1 = name;
        this.age1 = age;
        this.qualification1 = qualification;
        this.gender1 = gender
    }
}
let emp1 = new Employee("asha",27,"civil","female")
console.log(emp1)

// //Access and modify the key value in objects
let book = {
    "title":"JS basics",
    "pages": 200
}
console.log(book)
book.author = "John" //Adding a property
console.log(book)
book.title = "JS Basics" //Updating a property
console.log(book)
book.pages = 300
delete book.pages
console.log(book)
console.log(book.title)
console.log(book.author)
console.log(book.pages)

// //Looping through objects
let student2 = {
    "name":"ravi",
    "age":30,
    "qual": "mech",
    "gender":"male",
    "section":"C",
    grade:"A",
    "dob":"12/12/2025",
    "per":90
}
console.log(student2["grade"])
for(let key in student2) {
    console.log(`Key is ${key} and respective value is ${student2[key]}`)
}
// // Modern methods (ES6)
console.log(Object.keys(student2))
console.log(Object.values(student2))
console.log(Object.entries(student2))

//Nested objects
let student3 = {
    name:"anu",
    marks: {
        maths: 90,
        science: 100
    },
    greet: function() {
        console.log("Hello, good evening", this.name)
    }
}
console.log(student3.name)
console.log(student3.marks["science"])
console.log(student3.marks.science)
student3.greet()

//Methods inside objects
//this keyword in objects

//Object destructuring
let {name1,age1,qual1} = student2
console.log(name1,age1,qual1)
//Rename variables
let{name:fullname} = student2
console.log(student2)
console.log(fullname)

//Object spread and merge
let obj1 = {a:1, b:2}
let obj2 = {c:3, d:4}
let merge = {...obj1, ...obj2}
console.log(merge)

//Object.freeze() and Object.seal()
Object.freeze(obj1)
obj1.a = 10
obj1.e = 30
delete obj1.a
console.log(obj1)

Object.seal(obj2)
obj2.c = 100
obj2.e = 300 //No insertion 
delete obj2.c  //No deletion
console.log(obj2)

//Object references
let obj3 =  obj2
console.log(obj3)
obj3.c = 1500
console.log(obj3)
console.log(obj2)

// //Object.fromEntries()
let obj10 = [['id',1],['name','asha'],['qual','cse']]
console.log(Object.fromEntries(obj10))

// // Object.defineProperty
let obj12 = {}
Object.defineProperty(obj12, 'name', {
    value: 'radha',
    writable: true,
    enumerable : true,
    configurable: false
})
Object.defineProperty(obj12, 'age', {
    value: 25,
    writable: false,
    enumerable : false,
    configurable: true
})
console.log(obj12)
// delete obj11.name
// console.log(obj11)
// console.log(obj11.length)
for(let key in obj12) {
    console.log(`key is ${key} and value is ${obj12[key]}`)
}
obj12['name'] = 'krishna'
console.log(obj12)
obj12['age'] = 27
console.log(obj12)
// delete obj12.name
// delete obj12.age
// console.log(obj12)