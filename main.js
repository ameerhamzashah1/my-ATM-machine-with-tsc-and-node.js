#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 24000;
let myPin = 3377;
console.log("\t\nWelcome to Ameer Hamza's ATM machine\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code, login successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select an operation",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdraw method",
                choices: ["fast cash", "Enter amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "fast cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select amount",
                    choices: [1000, 3000, 5000, 10000, 15000, 20000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter your amount"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balanse is : ${myBalance}`);
    }
}
else {
    console.log("incorrect pin code, try again!");
}
console.log("thank you");
