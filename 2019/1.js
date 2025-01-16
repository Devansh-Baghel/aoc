let data = await Bun.file("in1.txt").text();
data = data.split("\n");

let count = 0;

for (let i in data) {
  let fuel = 0;
  let mass = +data[i];
  let f = [];

  while (fuel >= 0) {
    fuel = Math.floor(mass / 3) - 2;
    f.push(fuel);
    mass = fuel;
  }

  for (let j in f) {
    if (f[j] > 0) {
      count += f[j];
    }
  }

  console.log(f, fuel, +data[i]);
}

console.log(count);
