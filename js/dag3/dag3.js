const fs = require('fs');
fs.readFile('js/dag3/input.txt', (err, textFile) => {
  if (err) throw err;
  let lines = textFile.toString().split('\n');
  let total = 0;
  for (let x = 0; x < lines.length; x++) {
    total += parseInt(lines[x]);
  }
  let medel = total / lines.length;
  let totaltGoda = 0;
  for (let x = 0; x < lines.length; x++) {
    if (lines[x] == medel) {
      totaltGoda++;
    }
  }
  console.log(totaltGoda);
});
