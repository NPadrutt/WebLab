class Shape implements DrawableShape{
    x: number;
    y: number;

    Area () {
        get:{
            return this.x * this.y;
        }
    }

    draw() {
        console.log("Shape drawn at position (" + this.x + ", " + this.y + ").");
    }
}
