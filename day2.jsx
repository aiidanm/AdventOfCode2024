var fs = require(`fs`);

let safeReports = 0;

fs.readFile("day2input.txt", "utf8", function (err, data) {
  const lines = data.split("\n").filter(line => line.trim() !== "");

  lines.forEach((line, index) => {
    const arr = line.split(" ").map(Number);
    let increasing = true,
      decreasing = true;

    for (let i = 0; i < arr.length - 1; i++) {
      const diff = arr[i + 1] - arr[i];

      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        increasing = false;
        decreasing = false;
        break;
      }
      if (diff > 0) decreasing = false;
      if (diff < 0) increasing = false;
    }

    if (increasing || decreasing === true) {
      safeReports++;
    }
  });

  console.log(safeReports);
});
