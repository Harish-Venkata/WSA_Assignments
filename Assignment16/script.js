// function isArmstrong(num) {
//   let sum = 0;
//   let number = num;

//   while (number > 0) {
//     let digit = number % 10;
//     sum = sum + digit * digit * digit;
//     number = parseInt(number / 10);
//   }
//   return sum === num;
// }

// function armstrongRange(start, end) {
//   let armstrongNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (isArmstrong(i)) {
//       armstrongNumbers.push(i);
//     }
//   }
//   return armstrongNumbers;
// }

// document.write(armstrongRange(100, 999));

for (let num = 100; num <= 999; num++) {
  let currentValue = num;
  let sum = 0;
  let number = num;

  while (number > 0) {
    let digit = number % 10;
    sum = sum + digit * digit * digit;
    number = parseInt(number / 10);
  }
  if (currentValue === sum) {
    document.write(currentValue + "<br>");
  }
}


