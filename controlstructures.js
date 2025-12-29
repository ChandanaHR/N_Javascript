// Conditional statements/structures (Decision-making statements)
// if statement: Executes a block of code if the condition is true
// let age = 12
// if(age>=18) {
//     console.log("Eligible to vote")
// }

// if else statement:executes one block of code if true, or else another block if false
// if(age>=18) {
//     console.log("Eligible to vote")
// }
// else {
//     console.log("Not eligible to vote")
// }

// else if ladder: used to check multiple conditions
// let score = 85
// if(score>=90) {
//     console.log("Grade A")
// } else if(score>=75) {
//     console.log("Grade B")
// } 
// else {
//     console.log("Grade C")
// }

// switch case
// let day = 10
// switch(day) {
//     case 1 : console.log("Monday");
//              break;
//     case 2 : console.log("Tuesday");
//              break;
//     case 3 : console.log("Wednesday");
//              break;
//     case 4 : console.log("Thursday");
//              break;
//     case 5 : console.log("Friday");
//              break;
//     case 6 : console.log("Saturday");
//              break;
//     case 7 : console.log("Sunday");
//              break;
//     default: console.log("Invalid day");
// }

// Looping statements
// while loop
// initialization of variable
// while(condition) {
//     statement execution
//     increment/decrement
// }
// let i=1;
// while(i<=3) {
//     console.log(i);
//     i++;
// }
// do while loop
// let j=1
// do {
//     console.log(j)
//     j++;
// }while(j<=3)

//for loop
// for(let k=1;k<=5;k++) {
//     console.log(k)
// }

// Jumping statements
// break,continue
for(let a=0;a<=10;a++) {
    if(a==6) {
        continue;
    }
    else {
        console.log(a)
    }
}