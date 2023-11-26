const fs = require("node:fs");

fs.readFile("./2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  data = data.replaceAll("\n", "+")
  data = data.replaceAll(" ", "")
  data = data.slice(0, data.length - 1)

  let data2 = data;

  data = data.replaceAll("AX", "4")
  data = data.replaceAll("AY", "8")
  data = data.replaceAll("AZ", "3")
  data = data.replaceAll("BX", "1")
  data = data.replaceAll("BY", "5")
  data = data.replaceAll("BZ", "9")
  data = data.replaceAll("CX", "7")
  data = data.replaceAll("CY", "2")
  data = data.replaceAll("CZ", "6")

  const newData = eval(data)
  console.log(newData)

  data2 = data2.replaceAll("AX", "3")
  data2 = data2.replaceAll("BX", "1")
  data2 = data2.replaceAll("CX", "2")
  data2 = data2.replaceAll("AY", "4")
  data2 = data2.replaceAll("BY", "5")
  data2 = data2.replaceAll("CY", "6")
  data2 = data2.replaceAll("AZ", "8")
  data2 = data2.replaceAll("BZ", "9")
  data2 = data2.replaceAll("CZ", "7")

  console.log(eval(data2))
});
