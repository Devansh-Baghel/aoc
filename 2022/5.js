const data = await Bun.file("5.txt").text();
const crates = await Bun.file("5-crates.txt").text();

console.log(crates)
crates = crates.remove(all)
