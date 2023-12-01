let data = await Bun.file("input.txt").text()
data = data.split("\n")
data.pop()

// Part 1

let result = []

for (let i in data) {
  for (let j = 0; j <= data[i].length; j++) {
    if (isNaN(data[i][j])) continue
    result.push(parseInt(data[i][j]))
    break
  }


  for (let j = data[i].length; j >= 0; j--) {
    if (isNaN(data[i][j])) continue
    result[result.length - 1] += data[i][j]
    result[result.length - 1] = parseInt(result[result.length -1])
    break
  }
}

const sum = result.reduce((a,b) => {return a+b}, 0)
console.log(sum)
