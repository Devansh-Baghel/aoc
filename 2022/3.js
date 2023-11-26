const fs = require("node:fs")

fs.readFile("./3.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  data = data.trim()
  data = data.split("\n")

  let result = []

  for (let i in data) {
    const comp1 = data[i].slice(0, (data[i].length)/2)
    const comp2 = data[i].slice((data[i].length)/2, data[i].length)

    for (let j in comp1){
      if (comp2.includes(comp1[j])){
        result.push(comp1[j])
        break
      }
    }
  }

  let final = []

  for (let i of result) {
    if (i.toUpperCase() === i) {
      final.push(i.charCodeAt(0) - 38)
    } else {
      final.push(i.charCodeAt(0) - 96)
    }
  }

  const sum = final.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);

  console.log(sum)
})
