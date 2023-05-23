//Calls the shapes classes to this js
const {Square, Circle, Triangle} = require ('./shapes')


//If function to determine the shape based on the user selection
function logos(data){
    let shape = undefined
    if (data.shape === 'Square') {
        shape = new Square(data.font, data.text, data.color)
    }
    else if (data.shape === 'Triangle') {
        shape = new Triangle(data.font, data.text, data.color)
    }
    else {
        shape = new Circle(data.font, data.text, data.color)
    }
    return shape.render();
}

module.exports = logos;