let data = await Bun.file("in3.txt").text();
const nData = data.split("\n");
const down = 31
const right = 3

let count = 0;
let x = 0
let y = 0
const lastRowIndex = rows[0].length - 1

while (y < nData.length - 1) {
    // As we approach end of string, make sure we return to 
    // beginning of next string at correct index
    if ((lastRowIndex - x) < 3) {
        x = x - lastRowIndex - 1
    }
    x = x + 3
    y = y + 1
    if (rows[y][x] === "#") {
        count = count + 1
    }
}
