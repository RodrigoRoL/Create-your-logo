//Calls the shapes classes
const {Square, Triangle, Circle} = require ('./shapes')

//Square Test
describe('Square', () => {
    it('Should create a square logo', () => {
        const square = new Square();
        const color = ('yellow');
        square.setColor(color);
        expect(square.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}"/>`);
    });
});

//Triangle test
describe('Triangle', () => {
    it('Should create a triangular logo', () => {
        const triangle = new Triangle();
        const color = ('blue');
        triangle.setColor(color);
        expect(triangle.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`);
    });
});

//Circle Tes

describe('Circle', () => {
    it('Should create a circular logo', () => {
        const circle = new Circle();
        const color = ('green');
        circle.setColor(color);
        expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`);
    });
});
