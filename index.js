#! /usr/bin/env node

const { program } = require("commander");
const converter = require("./converter");
const pjson = require("./package.json");

program
  .name(pjson.name)
  .version(pjson.version, "-v, --version", "Output the current version")
  .description("Convert Serbian cyrillic text to latin and vice versa");

program
  .command("to-cyrillic")
  .description(
    "Convert the specific file from Serbian latin to Serbian cyrillic alphabet."
  )
  .argument("<filename>", "File to process, or - for stdin")
  .action(filename => converter.toCyrillic(filename));

program
  .command("to-latin")
  .description(
    "Convert the specific file from Serbian cyrillic to Serbian latin alphabet."
  )
  .argument("<filename>", "File to process, or - for stdin")
  .action(filename => converter.toLatin(filename));

program.parse(process.argv);
