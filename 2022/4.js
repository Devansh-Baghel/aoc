const fs = require("node:fs");

fs.readFile("./4.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }

  data = data.split("\n");

  // Part 1

  let count = 0;

  for (let i in data) {
    data[i] = data[i].split(",");

    for (let j in data[i]) {
      data[i][j] = data[i][j].split("-");

      for (let k in data[i][j]) {
        data[i][j][k] = parseInt(data[i][j][k]);
      }
    }

    if (i > 999) break;

    if (
      (Math.min(...data[i][0]) <= Math.min(...data[i][1]) &&
        Math.max(...data[i][0]) >= Math.max(...data[i][1])) ||
      (Math.min(...data[i][1]) <= Math.min(...data[i][0]) &&
        Math.max(...data[i][1]) >= Math.max(...data[i][0]))
    ) {
      count++;
    }
  }

  console.log(count);
});
