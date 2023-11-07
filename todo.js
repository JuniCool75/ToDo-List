import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "Todo",
            message: "what do you want to add in your todo",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do You Want to all more todo",
            default: false,
        }
    ]);
    const { Todo, addmore } = answers;
    // console.log(answers)
    loop = addmore;
    if (Todo) {
        todos.push("todo");
    }
    else {
        console.log("Kindly add valid input");
    }
}
// console.log(todos)
