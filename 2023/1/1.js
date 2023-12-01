let data = await Bun.file("input.txt").text();

// Part 1

function findSum(data) {
  let result = [];

  for (let i in data) {
    for (let j = 0; j <= data[i].length; j++) {
      if (isNaN(data[i][j])) continue;
      result.push(parseInt(data[i][j]));
      break;
    }

    for (let j = data[i].length; j >= 0; j--) {
      if (isNaN(data[i][j])) continue;
      result[result.length - 1] += data[i][j];
      result[result.length - 1] = parseInt(result[result.length - 1]);
      break;
    }
  }

  return result.reduce((a, b) => {
    return a + b;
  }, 0);
}

console.log(findSum(data.split("\n")))

// Part 2

data = data.replaceAll("twone", "21")
data = data.replaceAll("sevenine", "79")
data = data.replaceAll("oneight", "18")
data = data.replaceAll("threeight", "38")
data = data.replaceAll("nineight", "98")
data = data.replaceAll("fiveight", "58")
data = data.replaceAll("eighthree", "83")
data = data.replaceAll("eightwo", "82")
data = data.replaceAll("one", "1")
data = data.replaceAll("two", "2")
data = data.replaceAll("three", "3")
data = data.replaceAll("four", "4")
data = data.replaceAll("five", "5")
data = data.replaceAll("six", "6")
data = data.replaceAll("seven", "7")
data = data.replaceAll("eight", "8")
data = data.replaceAll("nine", "9")
data = data.split("\n")
data.pop()
console.log(data)


console.log(findSum(data))
