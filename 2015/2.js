let data = await Bun.file("in2.txt").text();
data = data.split("\n");

console.log(data);

let count = 0;

for (let i in data) {
  data[i] = data[i].split("x");

  const l = data[i][0];
  const w = data[i][1];
  const h = data[i][2];

  const min_side = Math.min(...[l * w, w * h, h * l]);
  const area = 2 * l * w + 2 * w * h + 2 * h * l;

  count += area + min_side;
}

console.log("Part one answer: ", count);

// Part two
let count2 = 0;

for (let i in data) {
  const l = data[i][0];
  const w = data[i][1];
  const h = data[i][2];

  const min_perimeter = Math.min(
    ...[2 * l + 2 * w, 2 * w + 2 * h, 2 * h + 2 * l]
  );
  const ribbon = l * h * w;

  count2 += min_perimeter + ribbon;
}

console.log("Part two answer: ", count2);
