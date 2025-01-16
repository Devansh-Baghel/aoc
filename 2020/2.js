let data = await Bun.file("in2.txt").text();
const dataList = data.split("\n");

let nData = [];
for (let i in dataList) {
  nData.push(dataList[i].split(" "));
}

let result = 0;

// Part one
for (let i in nData) {
  const min = nData[i][0].split("-")[0];
  const max = nData[i][0].split("-")[1];
  let count = 0;
  for (let j in nData[i][2]) {
    if (nData[i][2][j] === nData[i][1][0]) {
      count++;
    }
  }
  if (count >= min && count <= max) {
    result++
  }
}

nData.pop()

// Part two

let result2 = 0;

for (let i in nData) {
  const first = +nData[i][0].split("-")[0];
  const second = +nData[i][0].split("-")[1];

  if ((nData[i][2][first - 1] === nData[i][1][0] && nData[i][2][second - 1] !== nData[i][1][0])
    || (nData[i][2][first - 1] !== nData[i][1][0] && nData[i][2][second - 1] === nData[i][1][0])
  ){
    result2++
  }
}

console.log(result2)

