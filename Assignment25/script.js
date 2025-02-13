let array = [];

let n = Number(prompt("Enter the Positive Integer n: "));
let inputSize = 2 * n;

for (let i = 0; i < inputSize; i++) {
  array[i] = Number(prompt("Enter element " + (i + 1) + ": "));
}

document.write("array elements: ");
for (let i = 0; i < inputSize; i++) {
  document.write(array[i] + " ");
}
document.write("<br>");

let sum = 0;
for (let i = 0; i < inputSize; i += 2) {
  let min = array[i];
  if (array[i + 1] < min) {
    min = array[i + 1];
  }
  sum = sum + min;
}

document.write("Sum of min(ai,bi): " + sum);
