const fs = require('fs');
const buffer = fs.readFileSync(__dirname + '/input.txt');
const inputText = buffer.toString();
const inputArray = inputText.split('\r\n');

let svar = 0;
inputArray.forEach((element) => {
  svar += parseInt(element.replace(/[^\d]/g, ''));
});

console.log(svar);
