let data = await Bun.file("in3.txt").text();

let houses_santa = [{ x: 0, y: 0 }];
let houses_robo_santa = [{ x: 0, y: 0 }];

let result = [];

for (let i = 0; i < data.length; i++) {
  if (i % 2 === 0) {
    switch (data[i]) {
      case "<":
        houses_santa.push({
          x: houses_santa[houses_santa.length - 1].x - 1,
          y: houses_santa[houses_santa.length - 1].y,
        });
        break;
      case ">":
        houses_santa.push({
          x: houses_santa[houses_santa.length - 1].x + 1,
          y: houses_santa[houses_santa.length - 1].y,
        });
        break;
      case "^":
        houses_santa.push({
          x: houses_santa[houses_santa.length - 1].x,
          y: houses_santa[houses_santa.length - 1].y + 1,
        });
        break;
      case "v":
        houses_santa.push({
          x: houses_santa[houses_santa.length - 1].x,
          y: houses_santa[houses_santa.length - 1].y - 1,
        });
        break;
    }
  } else {
    switch (data[i]) {
      case "<":
        houses_robo_santa.push({
          x: houses_robo_santa[houses_robo_santa.length - 1].x - 1,
          y: houses_robo_santa[houses_robo_santa.length - 1].y,
        });
        break;
      case ">":
        houses_robo_santa.push({
          x: houses_robo_santa[houses_robo_santa.length - 1].x + 1,
          y: houses_robo_santa[houses_robo_santa.length - 1].y,
        });
        break;
      case "^":
        houses_robo_santa.push({
          x: houses_robo_santa[houses_robo_santa.length - 1].x,
          y: houses_robo_santa[houses_robo_santa.length - 1].y + 1,
        });
        break;
      case "v":
        houses_robo_santa.push({
          x: houses_robo_santa[houses_robo_santa.length - 1].x,
          y: houses_robo_santa[houses_robo_santa.length - 1].y - 1,
        });
        break;
    }
  }
}

// Function to check if an object exists in an array
function containsObject(obj, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].x === obj.x && list[i].y === obj.y) {
      return true;
    }
  }
  return false;
}

// Append only unique houses to the result array
for (let i = 0; i < houses_santa.length; i++) {
  if (!containsObject(houses_santa[i], result)) {
    result.push(houses_santa[i]);
  }
}

for (let i = 0; i < houses_robo_santa.length; i++) {
  if (!containsObject(houses_robo_santa[i], result)) {
    result.push(houses_robo_santa[i]);
  }
}

console.log(result.length);
