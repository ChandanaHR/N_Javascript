// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }
//     area() {
//         return 3.14*this.radius*this.radius
//     }
// }
// const c = new Circle(5)
// console.log(c.area())

// class Shape {
//     area() {
//         throw new Error("area() method must be implemented")
//     }
// }
// class Circle extends Shape{
//     constructor(radius) {
//         super();
//         this.radius = radius
//     }
//     area() {
//         return 3.14*this.radius*this.radius
//     }
// }
// const c = new Circle(5)
// console.log(c.area())

// class Animal {
//     sound() {
//         console.log("Animal makes sound")
//     }
// }
// class Dog extends Animal {
//     sound() {
//         console.log("Dog barks")
//     }
// }
// class Cat extends Animal {
//     sound() {
//         console.log("Cat meow")
//     }
// }
// const d = new Dog()
// d.sound()
// const c = new Cat()
// c.sound()

// function add(a,b,c) {
//     if(c!==undefined) {
//         return a+b+c
//     }
//     return a+b
// }
// console.log(add(2,3))
// console.log(add(2,3,4))

// function add(...numbers) {
//     return numbers.reduce((a,b)=>a+b,0)
// }
// console.log(add(2,3))
// console.log(add(2,3,4))