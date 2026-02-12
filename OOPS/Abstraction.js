import {add,sub,mul,div} from "./math.js"
// Abstraction using functions
// function makecoffee() {
//     console.log("Grinding beans....")
//     console.log("Boling water")
//     console.log("Mixing")
//     return "Coffee ready"
// }
// console.log(makecoffee())

// Abstraction using ES6 classes
// class Car {
//     start() {
//         this.#ignite();
//         console.log("Car started")
//     }
//     #ignite() {
//         console.log("Ignition process running")
//     }
// }
// let c = new Car();
// c.start();
// c.#ignite();

// Abstraction using closures
// function createbankaccount() {
//     let balance = 1000
//     return {
//         deposit(amount) {
//             balance += amount
//         },
//         getbalance() {
//             return balance;
//         }
//     }
// }
// const account = new createbankaccount()
// account.deposit(500)
// console.log(account.getbalance())
// console.log(account.balance)

// Private class fields (Modern JS Abstraction)
// class createbankaccount {
//     #balance = 1000;
//     deposit(amount) {
//         this.#balance += amount;
//     }
//     getbalance() {
//         return this.#balance;
//     }
// }
// const account = new createbankaccount()
// account.deposit(500)
// console.log(account.getbalance())
// console.log(account.#balance)

console.log(add(7,8))
console.log(sub(7,8))
console.log(mul(7,8))
console.log(div(7,8))