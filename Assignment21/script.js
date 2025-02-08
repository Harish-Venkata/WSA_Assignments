let input = prompt("enter the 10 array numbers sepearted by comma :");
let arr = input.split(",");
console.log(arr);
let j = 0;
let k = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0) j++;
  else k++;
}
console.log(`postive number:${j}`);
console.log(`Negative number:${k}`);
