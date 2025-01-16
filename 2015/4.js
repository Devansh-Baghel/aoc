import MD5 from "crypto-js/md5";

const input = "iwrupvqb";
let result = 10000000;

for (let i = 0; i <= 99999999; i++) {
  if (
    MD5(input + i)
      .toString()
      .startsWith("000000")
  ) {
    console.log(i, MD5(input + i).toString());
    break;
  }
}
