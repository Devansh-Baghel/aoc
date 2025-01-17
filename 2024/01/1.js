let data = await Bun.file("input.txt").text();
data = data.split("\n");
let leftList = [];
let rightList = [];

// Part 1
for (let i = 0; i < data.length; i++) {
  data[i] = data[i].split("   ");
  leftList.push(parseInt(data[i][0]));
  rightList.push(parseInt(data[i][1]));
}

leftList.sort();
rightList.sort();

let totalDistance = 0;

for (let i = 0; i < leftList.length; i++) {
  const distance = Math.abs(leftList[i] - rightList[i]);
  totalDistance += distance;
}

console.log(totalDistance);

// Part 2
