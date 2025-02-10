// // let input = prompt("enter the input array numbers sepearted by comma :");
// // let arr = input.split(",");

// // let input1 = toString(arr[input]);

// // console.log(input1);

let input = prompt("Enter the input array words separated by commas:");

let str = input.split(",");

for (let i = 0; i < str.length; i++) {
  str[i] = str[i].trim();
}

let output = "";
for (let i = 0; i < str.length; i++) {
  output = output + str[i];
  if (i < str.length - 1) {
    output = output + " ";
  }
}

document.write('"' + output + '"');
