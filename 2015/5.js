let data = await Bun.file("in5.txt").text();
data = data.split("\n");

let count = 0;

const letters = [
  "aa",
  "bb",
  "cc",
  "dd",
  "ee",
  "ff",
  "gg",
  "hh",
  "ii",
  "jj",
  "kk",
  "ll",
  "mm",
  "nn",
  "oo",
  "pp",
  "qq",
  "rr",
  "ss",
  "tt",
  "uu",
  "vv",
  "ww",
  "xx",
  "yy",
  "zz",
];

const vowels = ["a", "e", "i", "o", "u"];

// Part onw
for (let i in data) {
  if (
    data[i].includes("ab") ||
    data[i].includes("cd") ||
    data[i].includes("pq") ||
    data[i].includes("xy")
  ) {
    continue;
  }

  let passed = false;

  for (let j in letters) {
    if (data[i].includes(letters[j])) {
      passed = true;
    }
  }

  if (!passed) {
    continue;
  }

  let v_count = 0;

  for (let j in data[i]) {
    if (vowels.includes(data[i][j])) {
      v_count++;
    }
  }

  if (v_count < 3) {
    continue;
  }

  count++;
}

// Part two
for (let i in data) {
}

// console.log(count);
