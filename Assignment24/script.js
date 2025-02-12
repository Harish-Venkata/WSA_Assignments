let numbers = [];
let size = Number(prompt("Enter the size of array: "));

for (let i = 0; i < size; i++) {
  let num = Number(prompt("Enter element " + (i + 1) + ": "));
  numbers.push(num);
}

document.write("Input: ");
for (let i = 0; i < numbers.length; i++) {
  document.write(numbers[i] + " ");
}
document.write("<br>");

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

document.write("Ascending order: ");
for (let i = 0; i < numbers.length; i++) {
  document.write(numbers[i] + " ");
}
document.write("<br>");

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] < numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

document.write("Descending order: ");
for (let i = 0; i < numbers.length; i++) {
  document.write(numbers[i] + " ");
}
