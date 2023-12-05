let data = await Bun.file("in.txt").text()
const len = data.split("\n")[0].length
data = data.replaceAll("\n", "")

const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "=", "+", "-"]
let result = []

for (let i in data) {
  if (symbols.includes(data[i])) {
    result.push("#")
  } else {
    result.push(data[i])
  }
}

result = result.join("")
console.log(result)
