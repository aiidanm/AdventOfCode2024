const fs = require("fs");

const regex = /(mul\(\d+,\d+\))|(?:do\(\)|don't\(\))/g;

fs.readFile("day3input.txt", "utf8", function (err, data) {
  const myarr = data.match(regex);
  console.log(myarr);
  let sum = 0;
  includeswitch = true;
  myarr.forEach((item, i) => {
    if (item === "do()") {
      includeswitch = true;
      return;
    } else if (item === "don't()") {
      includeswitch = false;
      return;
    } else if(includeswitch === true){
      let numsarr = item.match(/\d+/g);
      console.log(numsarr, item)
      sum += Number(numsarr[0]) * Number(numsarr[1]);
    }
    console.log(sum)
  });
});
