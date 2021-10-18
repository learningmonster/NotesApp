// const validator = require("validator");
const chalk = require("chalk");

const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

// console.log(validator.isEmail("andrew@example.com"));
// console.log(validator.isEmail("andrew@example"));
// console.log(validator.isURL("http://hello.com"));

// Challenge; Use the chalk library in your project
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work

// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

const log = console.log;

log(chalk.green("Success!"));

log(chalk.bold("Success!"));

log(chalk.inverse("Success!"));

log(chalk.blue.bgRed.bold("Hello world!"));

log(chalk.blue.bgRed.bold.inverse("Hello world!"));

log(chalk.yellow.bgBlue.bold.inverse("Hello world!"));

log(chalk.red.bgYellow.inverse("Hello world!"));

log(chalk.red.bgYellow("Hello world!"));
