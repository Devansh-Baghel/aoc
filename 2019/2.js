let data = await Bun.file("in2.txt").text();
data = data.split(",");
// console.log(data);

// let d = [];

// for (let i = 0; i < data.length; i += 4) {
// d.push([data[i], data[i + 1], data[i + 2], data[i + 3]]);
// }

// console.log(d);
let pos1;
let pos2;
let result;

for (let i in data) {
  data[i] = +data[i];
}

for (let i = 0; i <= data.length; i += 4) {
  pos1 = data[i + 1];
  pos2 = data[i + 2];
  result = data[i + 3];

  if (data[i] === 1) {
    data[result] = data[pos1] + data[pos2];
  } else if (data[i] === 2) {
    data[result] = data[pos1] * data[pos2];
  }

  // if (data[pos1] * 100 + data[pos2] === 19690720) {
  // console.log(data[pos1], data[pos2]);
  // }

  console.log(data[pos1], data[pos2], data[result]);
}

console.log(data[0]);
