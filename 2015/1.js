let data = await Bun.file("in1.txt").text();

let count = 0;

for (let i in data) {
  if (data[i] === "(") {
    count++;
  } else {
    count--;
  }

  if (count === -1) {
    console.log(i);
    break;
  }
}

// console.log(count);
