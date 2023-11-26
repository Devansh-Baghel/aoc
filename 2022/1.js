const fs = require("node:fs");

fs.readFile("./1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data = data.split();
  data = data[0].replaceAll("\n\n", "+&+")
  data = data.replaceAll("\n", "+")
  data = data.slice(0, data.length - 1)
  data = data.split("+")

  let result = [0]
  for (let i in data) {
    if (data[i] === "&") {
      result.push(0)
    } else {
      result[result.length - 1] += parseInt(data[i])
    }
    
  }
  console.log(result)
  maxElf = Math.max(...result);
  maxElfIndex = result.indexOf(maxElf)
  result.splice(maxElfIndex, 1)
  maxElf2 = Math.max(...result)
  result.splice(result.indexOf(maxElf2), 1)
  maxElf3 = Math.max(...result)

  console.log(maxElf + maxElf2 + maxElf3)
});
