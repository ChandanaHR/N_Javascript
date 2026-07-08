// let age = 12
// if(age > 18) {
//     console.log("Eigible to vote")
// }
// else {
//     console.log("Not Eigible to vote")
// }

// let score = 35
// if(score>=85) {
//     console.log("Grade A+")
// }
// else if(score>=75 && score<85) {
//     console.log("Grade A")
// }
// else if(score>=65 && score<75) {
//     console.log("Grade B+")
// }
// else if(score>=55 && score<65) {
//     console.log("Grade B")
// }
// else if(score>=45 && score<55) {
//     console.log("Grade C")
// }
// else {
//     console.log("Fail")
// }

// let day = 10
// switch(day) {
//     case 1 : console.log("Monday");
//                 break;
//     case 2 : console.log("Tuesday");
//              break;
//     case 3 : console.log("Wed");
//              break;
//     case 4 : console.log("Thurs");
//              break;
//     case 5 : console.log("Friday");
//              break;
//     case 6 : console.log("Saturday");
//              break;
//     case 7 : console.log("Sunday");
//              break;
//     default: console.log("Invalid day")
// }

// let i =1
// while(i<=3) {
//     console.log(i);
//     i++;
// }

// for(let j=0;j<=5;j++) {
//     console.log(j)
// }

// let k =1
// do {
//     console.log(k)
//     k++;
// } while(k<=4)

let n = 5
for(let i=1;i<=n;i++) {
    let row = "";
    for(let j=1;j<=i;j++) {
        row += i +" ";
    }
    console.log(row)
}

// *
// * *
// * * *
// * * * *
// * * * * *

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(let i=0;i<5;i++) {
    if(i==3) {
        continue;
    }
    else {
        console.log(i)
    }
}
