"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var ans = await inquirer_1.default.prompt([{
        name: "sent",
        type: "input",
        message: "enter your sentence to count the words:"
    }]);
var done = ans.sent.trim().split(" ");
console.log(done);
console.log('your sentence word count is ${done.length}');
