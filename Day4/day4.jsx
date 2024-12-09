const fs = require("fs");

const checkChar = function (data) {

const contentOnly = data.replace(/\n/g, "");
const position = Math.floor(contentOnly.length / 2);
let middleChar = contentOnly[position];


  let charValues = {
    under: data[position + 11],
    underRight: [position + 2],
    underLeft: [position],
    above: -[position + 1],
    aboveLeft: -[position],
    aboveRight: [position + 2],
  };

  console.log(charValues)
};

const findXMAS = function (data) {
    const lines = data.split("\n").filter((line) => line.trim() !== "");
    const linelen = lines[0].trim().length; 
  const values = {
    under: lines[0].length + 1,
    underRight: lines.length + 2,
    underLeft: lines.length,
    above: -lines.length + 1,
    aboveLeft: -lines.length,
    aboveRight: lines.length + 2,
  };
};

fs.readFile("day4testinput.txt", "utf8", function (err, data) {
  checkChar(data);
});
