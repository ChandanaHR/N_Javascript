class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    getresult() {
        return this.marks >= 40 ? "Pass" : "Fail"
    }
}
let s1 = new Student("asha",23)
console.log(s1.getresult())
console.log(s1.getresult())

console.log(s1.getresult())

class Firstclass {
    constructor(name,age) {
        this.name1 = name
        this.age1 = age
    }
    getresult(a,b) {
        return a+b
    }
    Secondclass = class {
        constructor(qual) {
            this.qualification = qual
        }
        getqual() {
            return this.qualification
        }
    }
}
let obj1 = new Firstclass("sushil",23)
console.log(obj1)
console.log(obj1.name1)
console.log(obj1.age1)
let res = obj1.getresult(3,4)
console.log(res)
console.log(obj1.Secondclass)
let obj2 = new obj1.Secondclass("cse")
console.log(obj2.getqual())
