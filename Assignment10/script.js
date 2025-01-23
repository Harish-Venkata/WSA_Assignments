//a)
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`${i} `);
  }
  document.write("<br>");
}

document.write("<br>");
//b)
let k = 1;
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`${k++} `);
  }
  document.write("<br>");
}

document.write("<br>");
//c)
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 5; j++) {
    document.write("* ");
  }
  document.write("<br>");
}
