class Circle extends Shape implements DrawableShape{
    constructor(x:number, y:number){
        super();

        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("Circle drawn at position (" + this.x + ", " + this.y + ").");
    }
}