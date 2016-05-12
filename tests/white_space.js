#!/usr/bin/env node

var markdownlint = require("markdownlint");
var assert = require("assert");

var options = {
  "files": [ "./README.md" ],
  "config": require("./relaxed.json")
};

markdownlint(options, function callback(err, result) {
  if (result.toString().length > 1) {
    console.log(result.toString());
    process.exit(1);
  } else {
    console.log("Pass");
  }
});
