let data = await Bun.file("in.txt").text();
data = data.split("\n");
data.pop();

// Part 1

let result = 0;

for (let i in data) {
  const red = Math.max(...data[i].match(/(\d+)\s+red/g).map(elm => parseInt(elm.match(/\d+/)[0], 10)))
  const green = Math.max(...data[i].match(/(\d+)\s+green/g).map(elm => parseInt(elm.match(/\d+/)[0], 10)))
  const blue = Math.max(...data[i].match(/(\d+)\s+blue/g).map(elm => parseInt(elm.match(/\d+/)[0], 10)))

  if (red <= 12 && green <= 13 && blue <= 14) result += parseInt(i) + 1
}

console.log(result)
