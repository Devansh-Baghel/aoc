let data = await Bun.file("in4.txt").text();
data = data.split("\n\n");

const codes = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].sort();
const codes_cid = [...codes, "cid"].sort();

let valid_ids = [];

let count = 0;

for (let i in data) {
  data[i] = data[i].replaceAll("\n", " ");
  data[i] = data[i].split(" ");

  for (let j in data[i]) {
    data[i][j] = data[i][j][0] + data[i][j][1] + data[i][j][2];
  }
}

for (let i in data) {
  data[i] = data[i].sort();

  if (
    JSON.stringify(data[i]) === JSON.stringify(codes) ||
    JSON.stringify(data[i]) === JSON.stringify(codes_cid)
  ) {
    count++;
    valid_ids.push(i);
  }
}

console.log(count);
console.log(valid_ids.length);

// Part two

let data2 = await Bun.file("in4.txt").text();
data2 = data2.split("\n\n");

let valid = [];

for (let i in data2) {
  data2[i] = data2[i].replaceAll("\n", " ");
  data2[i] = data2[i].split(" ");
}

for (let i in data2) {
  if (valid_ids.includes(i)) {
    valid.push(data2[i]);
  }
}

for (let i in valid) {
  console.log(valid[i]);
  valid[i] = valid[i].sort();

  for (let j in valid[i]) {
    console.log(valid[i][j]);
  }
}
