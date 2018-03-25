class Rectangle extends Shape implements DrawableShape{

    constructor(x:number, y:number){
        super();

        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("Rectangle drawn at position (" + this.x + ", " + this.y + ").");
    }

}