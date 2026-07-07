// class Student {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hi, my name is ${this.name} and my age is ${this.age}`)
//     }
// }

// // console.log(name,age)
// const s1 = new Student(23,"Asha")
// console.log(s1.name, s1.age)
// s1.greet()


// closures
// function outer() {
//     let message = "Hello, Javascript"
//     function inner() {
//         console.log(message);
//     }
//     return inner;
// }
// const result = outer()
// result()

// function createcounter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }
// const counter = createcounter()
// counter()
// counter()
// counter()

// function createaccount() {
//     let balance = 1000 //private data
//     return {
//         deposit(amount) {
//             balance += amount
//         },
//         withdraw(amount) {
//             if(amount<=balance) {
//                 balance -= amount
//             }
//         },
//         getbalance() {
//             return balance
//         },
//     }
// }
// const account = createaccount()
// console.log(account.balance)
// account.deposit(500)
// console.log(account.balance)
// console.log(account.getbalance())

// class Student {
//     constructor(name,marks) {
//         this.name = name 
//         let _marks = marks    //private data

//         this.getmarks = function() {
//             return _marks
//         }

//         this.setmarks = function(value) {
//             if(value>=0) {
//                 _marks = value
//             }
//             else {
//                 console.log("Invalid marks")
//             }
//         }
//     }
// }
// let s = new Student("Asha",80)
// console.log(s.getmarks())
// s.setmarks(90)
// console.log(s.getmarks())
// s.name = "Ravi"
// s._marks = 1000
// console.log(s.name)
// console.log(s._marks)
// console.log(s.getmarks())

// class Employee {
//     #salary;         //private field
//     constructor(name,salary) {
//         this.name = name;
//         this.#salary = salary
//     }
//     getsalary() {
//         return this.#salary
//     }
//     setsalary(amount) {
//         if(amount>0) {
//             this.#salary = amount
//         }
//         else {
//             console.log("Invalid salary")
//         }
//     }
// }
// const emp = new Employee("Dolly",50000)
// console.log(emp.getsalary())
// emp.setsalary(10000)
// console.log(emp.getsalary())
// emp.#salary = 30000
// console.log(emp.getsalary())

class Product {
    #price;

    constructor(price) {
        this.#price = price;
    }

    get price() {
        return this.#price
    }

    set price(amount) {
        if(amount > 0) this.#price = amount 
        else {
            console.log("Invalid price")
        }
    }
}
let p = new Product(200)
console.log(p.price) //getter
p.price = 300    //setter
console.log(p.price) //gettr
p.price = -100 //setter
console.log(p.price) //getter