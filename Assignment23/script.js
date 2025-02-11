let num = [];
let number = +prompt("Enter the array elements:");
for (let i = 0; i < number; i++) {
  let element = +prompt("Enter element:");
  num.push(element);
}
let sum = 0;
let product = 1;
for (let i = 0; i < num.length; i++) {
  sum = sum + num[i];
  product *= num[i];
}
document.write(`Sum: ${sum}`);
document.write("<br>");
document.write(`Product: ${product}`);
