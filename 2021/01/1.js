let data = await Bun.file("in.txt").text();

data = data.split("\n");
console.log(data);

let count = 0;

for (let i = 0; i < data.length; i++) {
  console.log(i, data[i]);

  if (+data[i] < +data[i + 1]) {
    count++;
    console.log("inc");
  }
}

console.log(count);
