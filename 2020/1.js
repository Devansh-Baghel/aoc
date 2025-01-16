let data = await Bun.file("in.txt").text();
const dataList = data.split("\n");

for (let i in dataList) {
  for (let j = i; j < dataList.length; j++) {
    for (let k = j; k < dataList.length; k++) {
      if (+dataList[i] + +dataList[j] + +dataList[k] === 2020) {
        console.log("three", dataList[i], dataList[j], dataList[k]);
        console.log(+dataList[i] * +dataList[j] * +dataList[k]);
      }
    }
  }
}
