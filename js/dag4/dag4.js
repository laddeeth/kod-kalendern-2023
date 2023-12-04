//Read input and split by row into array

const fs = require('fs');
const buffer = fs.readFileSync(__dirname + '/input.txt');
const inputText = buffer.toString();
const inputArray = inputText.split('\n');

const position = 106023;
let closest = { row: 0, value: 0, distance: Number.MAX_SAFE_INTEGER };
for (let x = 0; x < inputArray.length; x++) {
  let proximity = parseInt(inputArray[x]) - position;
  if (proximity < 0) {
    proximity = proximity * -1;
  }

  if (proximity < closest.distance) {
    closest.row = x;
    closest.value = parseInt(inputArray[x]);
    closest.distance = proximity;
  }
}
console.log(
  'Row:',
  closest.row,
  'Value:',
  closest.value,
  'Proximity:',
  closest.distance
);
