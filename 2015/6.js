let data = await Bun.file("in6.txt").text();
data = data.split("\n");

let on = new Set();

// Parsing
for (let i in data) {
  data[i] = data[i].split(" through ");

  if (data[i][0].startsWith("turn on")) {
    data[i][0] = data[i][0].replace("turn on ", "on-");
  } else if (data[i][0].startsWith("turn off")) {
    data[i][0] = data[i][0].replace("turn off ", "off-");
  } else if (data[i][0].startsWith("toggle")) {
    data[i][0] = data[i][0].replace("toggle ", "toggle-");
  }

  data[i] = [...data[i][0].split("-"), data[i][1]];

  data[i][1] = data[i][1].split(",");
  data[i][2] = data[i][2].split(",");

  data[i][1][0] = +data[i][1][0];
  data[i][1][1] = +data[i][1][1];
  data[i][2][0] = +data[i][2][0];
  data[i][2][1] = +data[i][2][1];
}

// for (let i in data) {
//   switch (data[i][0]) {
//     case "on":
//       for (let j = data[i][1][0]; j <= data[i][2][0]; j++) {
//         for (let k = data[i][1][1]; k <= data[i][2][1]; k++) {
//           on.add([j, k]);
//         }
//       }
//     // on.add([data[i][1][0], data[i][1][1]]);
//   }
// }

// console.log(on);
// console.log(data);
