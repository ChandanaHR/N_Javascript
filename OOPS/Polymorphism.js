// Basics
// Function polymorphism
// Using default parameters
function greet(name="krishna") {
    console.log("Hello",name)
}
greet("Radha")
greet()

// Using arguments
function add() {
    if(arguments.length === 2) {
        return arguments[0]+arguments[1]
    }
     if(arguments.length === 3) {
        return arguments[0]+arguments[1]+arguments[2]
    }
}
console.log(add(2,3))
console.log(add(2,3,4))

//Using rest parameters
function add1(...numbers) {
    return numbers.reduce((sum,num)=>sum+num,0)
}
console.log(add1(3,4))
console.log(add1(6,7,8))

// Level 2: 
// Method overriding (Runtime polymorphism)
// Using ES6 classes
class Animal {
    makesound() {
        console.log("Animal class")
    }
}
class Dog extends Animal {
    makesound() {
        super.makesound()
        console.log("Dog barks")
    }
}
class Cat extends Animal {
    makesound() {
        super.makesound()
        console.log("Cat meow")
    }
}
const d1 = new Dog();
const c1 = new Cat();
d1.makesound()
c1.makesound()

// Operator polymorphism
console.log(5+5)
console.log("5"+5)
console.log([1,2]+[3])
console.log("Hi"+"hello")

//Prototype based polymorphism
function Shape() {}
Shape.prototype.draw = function() {
    console.log("Drawing shape")
}
function Circle() {}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function() {
    console.log("Drawing circle")
}
const circle = new Circle();
circle.draw()

// Level 3: Advanced
// Duck typing: No need for explicit inheritance
class Bird {
    fly() {
        console.log("Flying")
    }
}
class Airplane {
    fly() {
        console.log("Airplane flying")
    }
}
function startflying(obj) {
    obj.fly();
}
startflying(new Bird())
startflying(new Airplane())

// Polymorphism without classes(Functional way)
function makesound(animal) {
    animal.sound();
}
const dog = {
    sound: ()=>console.log("Bark")
}
const cat = {
    sound: ()=>console.log("Meow")
}
makesound(dog)
makesound(cat)

// Level 4: Very advanced
// Ad-hoc polymorphism: Same function works for different types
function print(value){
    console.log(value)
}
print(10)
print("Hello")
print([1,2,3])

// Polymorphism using strategy pattern
class paymentstrategy {
    pay(amount) {}
}
class cardpayment extends paymentstrategy {
    pay(amount) {
        console.log("Paid"+amount+"using card")
    }
}
class upipayment extends paymentstrategy {
    pay(amount) {
        console.log("Paid"+amount+"using upi")
    }
}
class Paymentcontext {
    constructor(strategy) {
        this.strategy = strategy
    }
    execute(amount) {
        this.strategy.pay(amount)
    }
}
const payment = new Paymentcontext(new cardpayment())
payment.execute(500)

class Base {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}
const b1 = new Base("Krishna",23)
console.log(b1.name,b1.age)