import inquirer from "inquirer";

const ans :{
    sent : string;
} = await inquirer.prompt([{
    name : "sent",
    type: "input",
    message: "enter your sentence to count the words:"
}])

    const done = ans.sent.trim().split(" ")
    console.log(done)

    console.log('your sentence word count is ${done.length}')