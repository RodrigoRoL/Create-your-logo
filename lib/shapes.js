//Shape class that will eventually used to define Square, Circle and Triangle
class Shape{
    constructor(color, text, font){
        this.color = color;
        this.text = text;
        this.font = font;
    }
    setColor(color){
        this.color = color;
    }
    setText(text){
        this.text = text;
    }
    setFont(font){
        this.font = font;
    }
}

// Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
class Square extends Shape{
    render(){
        return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" height="200" width="200" fill="${this.color}"/>
        <text fill="${this.font}" x="150" y="150" font-size="60" text-anchor="middle"> ${this.text}</text>
        </svg>`
    }
}

// Defines a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle extends Shape{
    render(){
        return `<svg version="1.1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>
        <text fill="${this.font}" x="150" y="150" font-size="60" text-anchor="middle"> ${this.text}</text>
        </svg>`
    }
}
// Defines a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon) with position, size, and fill color based on the current instance's properties.
class Triangle extends Shape{
    render(){
       
        return `<svg version="1.1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>
        <text fill="${this.font}" x="150" y="150" font-size="60" text-anchor="middle" > ${this.text}</text>
        </svg>`
    }
};

module.exports = {Square, Circle, Triangle}