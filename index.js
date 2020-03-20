#!/usr/bin/node

const { Command } = require("commander");
const packageJSON = require("./package.json");
const docStart = require("./commands/doc-start");
const docBuild = require("./commands/doc-build");
const libBuild = require("./commands/lib-build");

const program = new Command();
program.version(packageJSON.version);

program
  .command("doc:start")
  .description("start document development server")
  .action(docStart);

program
  .command("doc:build")
  .description("build document site")
  .action(docBuild);

program
  .command("lib:build")
  .description("build library")
  .action(libBuild);

program.parse(process.argv);