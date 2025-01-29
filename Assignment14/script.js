// function checkPositive(n) {
//   if (n <= 0 || n != n) {
//     return false;
//   }
//   return true;
// }

// let error = "N must be a positive integer";

// function sumSeries1(n) {
//   if (!checkPositive(n)) {
//     return error;
//   }
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum = sum + 1 / i;
//   }
//   return sum.toFixed(2);
// }

// function sumSeries2(n) {
//   if (!checkPositive(n)) {
//     return error;
//   }
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     let num = i * 2;
//     sum = sum + num;
//   }
//   return sum;
// }

// let n = +prompt("Enter the number");
// if (checkPositive(n)) {
//   document.write("a)" + sumSeries1(n) + "<br>");
//   document.write("b)" + sumSeries2(n));
// } else {
//   document.write(error);
// }

function sumSeries1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + 1 / i;
  }
  return sum.toFixed(2);
}

function sumSeries2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let num = i * 2;
    sum = sum + num;
  }
  return sum;
}
let n = +prompt("Enter the number");
document.write("a)" + sumSeries1(n) + "<br>");
document.write("b)" + sumSeries2(n));
