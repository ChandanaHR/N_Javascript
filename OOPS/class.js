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