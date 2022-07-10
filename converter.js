const fs = require("fs");
const yuconv = require("yuconv");

function getInputStream(inputFile) {
  if (inputFile) {
    if (inputFile === "-") {
      return process.stdin;
    }
    if (fs.existsSync(inputFile)) {
      return s.createReadStream(inputFile);
    }
  }
  throw new Error(`Input file is not readable`);
}

function getOutputStream(filename) {
  return process.stdout;
}

function convert(filename, mode) {
  const input = getInputStream(filename);
  const output = getOutputStream(filename);
  input.on("readable", () => {
    let chunk;
    // Use a loop to make sure we read all available data.
    while ((chunk = input.read()) !== null) {
      output.write(yuconv(Buffer.from(chunk).toString("utf8"), mode));
    }
  });
}

function toLatin(filename) {
  return convert(filename, "latin");
}

function toCyrillic(filename) {
  return convert(filename, "cyrillic");
}

module.exports = {
  toLatin,
  toCyrillic
};
