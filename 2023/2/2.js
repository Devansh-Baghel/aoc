let data = await Bun.file("in.txt").text();
data = data.split("\n");
data.pop();

// Part 1

let part1 = 0;
let part2 = 0;

for (let i in data) {
  const red = Math.max(...data[i].match(/(\d+)\s+red/g).map(elm => parseInt(elm.match(/\d+/)[0], 10)))
  const green = Math.max(...data[i].match(/(\d+)\s+green/g).map(elm => parseInt(elm.match(/\d+/)[0], 10)))
  const blue = Math.max(...data[i].match(/(\d+)\s+blue/g).map(elm => parseInt(elm.match(/\d+/)[0], 10)))

  if (red <= 12 && green <= 13 && blue <= 14) part1 += parseInt(i) + 1
  part2 += red * green * blue
}

console.log(part1)
console.log(part2)
