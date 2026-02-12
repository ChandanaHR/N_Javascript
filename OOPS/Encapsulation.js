//Without encapsulation
// class Bank {
//     constructor() {
//         this.balance = 5000
//     }
// }
// let acc= new Bank();
// console.log(acc.balance)
// acc.balance = -1000
// console.log(acc.balance)

// // First way to achieve encapsulation : Closures
// function createaccount() {
//     let balance = 1000; //private data
//     return {
//         deposit(amount) {
//             balance+=amount;
//         },
//         withdraw(amount) {
//             if(amount <= balance) balance-=amount;
//         },
//         getbalance() {
//             return balance
//         },
// }
// }
// const account = createaccount()
// console.log(account.balance)
// account.deposit(1000)
// console.log(account.getbalance())

// class Student {
//     constructor(name,marks) {
//         this.name = name
//         let _marks = marks

//         this.getmarks = function() {
//         return _marks
//         }
//         this.setmarks = function(value) {
//             if(value>=0) {
//                 _marks = value;
//             }
//             else {
//                 console.log("Invalid marks")
//             }
//     }
//     }
// }
// let s = new Student("Chandana",80)
// console.log(s.getmarks())
// s.setmarks(90)
// console.log(s.getmarks())
// s._marks = 100
// console.log(s.getmarks())

// class Student {
//     #marks;
//     constructor(name,marks) {
//         this.name = name
//         this.#marks = marks }

//         getmarks() {
//             return this.#marks;
//         }
//         setmarks(value) {
//             if(value>0) {
//                 this.#marks = value
//             }
//             else {
//                 console.log("Invalid marks")
//             }
//         }
//     }
// let s = new Student("Chandana",80)
// console.log(s.getmarks())
// s.setmarks(90)
// console.log(s.getmarks())
// // s.#marks = 100
// console.log(s.getmarks())

class Student {
    #marks;
    constructor(name,marks) {
        this.name = name
        this.#marks = marks }

        get marks() {
            return this.#marks;
        }
        set marks(value) {
            if(value>0) {
                this.#marks = value
            }
            else {
                console.log("Invalid marks")
            }
        }
    }
let s = new Student("Chandana",80)
console.log(s.marks)
s.marks = 90
console.log(s.marks)
s.marks = 100
console.log(s.marks)
s.marks = -100
console.log(s.marks)