var marks = +prompt("plx enter your marks")
if(marks < 0 || marks > 100) {
    console.log(`invalid marks`)
}
else if (marks >= 90 && marks <= 100) {
    console.log(`your grade is A+ and GPA is 4.0`)
} else if (marks >= 85 && marks <= 89) {
    console.log(`your grade is A and GPA is 4.0`)
}
else if (marks >= 80 && marks <= 84) {
    console.log(`your grade is A- and GPA is 3.8`)
}
else if (marks >= 75 && marks <= 79) {
    console.log(`your grade is B+ and GPA is 3.4`)

}
else if (marks >=71 && marks <= 74) {
    console.log(`your grade is B and GPA is 3.0`)

}
else if (marks >=68 && marks <= 70) {
    console.log(`your grade is B- and GPA is 2.8`)

}
else if (marks >=64 && marks <= 67) {
    console.log(`your grade is C+ and GPA is 2.4`)

}
else if (marks >=61 && marks <= 63) {
    console.log(`your grade is C and GPA is 2.0`)

}
else if (marks >=57 && marks <= 60) {
    console.log(`your grade is C- and GPA is 1.8`)

}
else if (marks >=53 && marks <= 56) {
    console.log(`your grade is D+ and GPA is 1.4`)

}
else if (marks >=50 && marks <= 52) {
    console.log(`your grade is D and GPA is 1.0`)

}
else{
    console.log(`fails`)
}



