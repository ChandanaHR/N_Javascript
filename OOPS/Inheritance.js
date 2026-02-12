// Prototype based inheritance
// function Person(name) {
//     this.name = name
// }
// Person.prototype.sayHello = function() {
//     console.log("Hello my name is" +this.name);
// }

// function Student(name,rollNo) {
//     Person.call(this,name);
//     this.rollNo = rollNo
// }

// //inherit methods
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.study = function() {
//     console.log(this.name+ "is studying")
// };

// const s1 = new Student("Asha",101);
// s1.sayHello();
// s1.study();

// // class based Inheritance
// class Parent {
//     constructor() {}
// }
// class Child extends Parent {
//     constructor() {
//         super();
//     }
// }

// //Simple Inheritance
// class Animal {
//     eat() {
//         console.log("Animal is eating")
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking")
//     }
// }
// const d = new Dog();
// d.eat();
// d.bark();

// Inheritance with constructor
class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log("Hello"+this.name)
    }
}
class Employee extends Person {
    constructor(name, empid) {
        super(name);
        this.empid = empid
    }
    work() {
        console.log(this.name+"is working")
    }
}
const e1 = new Employee("Anita",201)
e1.work();
e1.greet()

// Method overriding
// class Vehicle {
//     run() {
//         console.log("Vehicle is running")
//     }
// }
// class Bike extends Vehicle {
    
//     run() {
//         super.run()
//         console.log("Bike is running fast")
//     }
// }
// const b = new Bike()
// b.run()

// Multilevel inheritance
// class A {}
// class B extends A {}
// class C extends B {}

//Hierarchical Inheritance
// class A {}
// class B extends A {}
// class C extends A {}

//Multiple Inheritance
// class A extends  B,C {}

// const walk = {
//     walk() {
//         console.log("Walking")
//     }
// }
// const talk = {
//     talk() {
//         console.log("Talking")
//     }
// }
// class Person {}
// Object.assign(Person.prototype,walk,talk)

// const p = new Person()
// p.walk()
// p.talk()

console.log(e1 instanceof Person)
console.log(e1 instanceof Employee)