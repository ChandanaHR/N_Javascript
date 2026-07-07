// Animal {
//     eating , sleeping
// }

// class Animal {
//     eat() {
//         console.log("Eating.....")
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking.......")
//     }
// }
// class Puppy extends Dog {
//     sleep() {
//         console.log("Puppy is sleeping")
//     }
// }
// class Cat extends Animal {
//     meow() {
//         console.log("Cat is meowing....")
//     }
// }

// let p = new Puppy()
// p.sleep()
// p.bark()
// p.eat()
// let d = new Dog();
// d.eat()
// d.bark()
// let c = new Cat();
// c.eat()

// class A{}
// class B{}
// class child extends A,B //not allowed

// Mixin

// const Parent1 = {
//     parent1() {
//         console.log("Parent 1 mixin")
//     }
// };
// const Parent2 = {
//     parent2() {
//         console.log("Parent 2 mixin")
//     }
// };

// class Child {}

// Object.assign(Child.prototype, Parent1)
// Object.assign(Child.prototype, Parent2)

// const obj = new Child()
// obj.parent1()
// obj.parent2()
// Object.assign(target,source)

// class Engine {
//     start() {
//         console.log("Engine started.....")
//     }
// }
// class MusicSystem {
//     play() {
//         console.log("Music playing......")
//     }
// }
// class Car {
//     constructor() {
//         this.engine = new Engine()
//         this.music = new MusicSystem()
//     }
// }
// const c = new Car();
// c.engine.start()
// c.music.play()

// let student = {
//     name: "chandana"
// }
// console.log(student.__proto__)
// internally 
// __proto__ 
// console.log(Object.getPrototypeOf(student))

// function Student(name) {
//     this.name = name;
//     this.study = function() {
//         console.log("Studying")
//     }
//     Student.prototype.study = function() {
//         console.log("Studying")
//     }
// }
// let obj = new Student("asha")
// let obj2 = new Student("ravi")
// obj.study()
// obj2.study()
// console.log(obj.name)
// obj.study()

// Object.create()
// let animal = {
//     eat() {
//         console.log("Eating.....")
//     }
// };
// let dog = Object.create(animal)
// dog.bark = function() {
//     console.log("Barking.....")
// }
// dog.eat = function() {
//     console.log("Dog eating....")
// }
// dog.eat() //inherited
// dog.bark() //own method
//  animal eat()
//     prototype chaining
//  dog bark()

let livingthing = {
    breathe() {
        console.log("Breathing")
    }
};
let animal = Object.create(livingthing)
animal.eat = function() {
    console.log("Eating")
}
let dog = Object.create(animal)
dog.bark = function() {
    console.log("Bark")
}
dog.bark()
dog.eat()
dog.breathe()