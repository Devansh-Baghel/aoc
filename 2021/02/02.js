let data = await Bun.file("02.in.txt").text();
data = data.split("\n");
let h = 0;
let d = 0;
let aim = 0;

// console.log(data);

// for (let i = 0; i < data.length; i++) {
//   if (data[i][0] === "f") {
//     h += parseInt(data[i][data[i].length - 1]);
//   } else if (data[i][0] === "d") {
//     d += parseInt(data[i][data[i].length - 1]);
//   } else if (data[i][0] === "u") {
//     d -= parseInt(data[i][data[i].length - 1]);
//   }
// }

// console.log(d * h);

// Part two

for (let i = 0; i < data.length; i++) {
  if (data[i][0] === "f") {
    h += parseInt(data[i][data[i].length - 1]);
    d += parseInt(data[i][data[i].length - 1]) * aim;
  } else if (data[i][0] === "d") {
    aim += parseInt(data[i][data[i].length - 1]);
  } else if (data[i][0] === "u") {
    aim -= parseInt(data[i][data[i].length - 1]);
  }
}

console.log(h * d);
