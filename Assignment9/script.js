let subject_mark1 = +prompt("Enter the First subject marks");
let subject_mark2 = +prompt("Enter the Second subject marks");
let subject_mark3 = +prompt("Enter the third subject marks");

console.log(subject_mark1);
console.log(subject_mark2);
console.log(subject_mark3);

let average_marks = `${(subject_mark1 + subject_mark2 + subject_mark3) / 3}`;

// console.log(average_marks);

// if (average_marks >= 90) {
//   console.log("Ex");
// } else if (average_marks >= 80 && average_marks <= 90) {
//   console.log("A+");
// } else if (average_marks >= 70 && average_marks <= 80) {
//   console.log("A");
// } else if (average_marks >= 60 && average_marks <= 70) {
//   console.log("B+");
// } else if (average_marks < 60) {
//   console.log("Fail");
// }

switch (true) {
  case average_marks >= 90:
    console.log("Ex");
    break;
  case average_marks >= 80 && average_marks < 90:
    console.log("A+");
    break;
  case average_marks >= 70 && average_marks < 80:
    console.log("A");
    break;
  case average_marks >= 60 && average_marks < 70:
    console.log("B+");
    break;
  case average_marks < 60:
    console.log("Fail");
    break;
  default:
    console.log("Absent");
    break;
}
