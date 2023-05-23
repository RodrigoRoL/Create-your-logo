const inquirer = require ('inquirer');
const {Square, Circle, Triangle} = require ('./lib/shapes');
const fs = require('fs');
const logos = require('./lib/logos')

// Array of questions about your logo
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter 3 or less letters for your logo",
    },
    {
        type: "input",
        name: "font",
        message: "Enter a color for your text:",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose the shape of your logo",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        type: "input",
        name: "color",
        message: "Enter a color to fill your shape:",
    },
    
];

//Function to write data to file
function write (fileName, data) {
	var content = logos (data);
    fs.writeFile(fileName, content, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("You have created your new logo!");
    });
};

function init() {
    inquirer.prompt(questions).then(function(data){
        var fileName = 'logo.svg'
        write(fileName,data);
    });
}

init();