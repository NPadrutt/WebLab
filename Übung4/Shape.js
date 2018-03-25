var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.Area = function () {
        get: {
            return this.x * this.y;
        }
    };
    Shape.prototype.draw = function () {
        console.log("Shape drawn at position (" + this.x + ", " + this.y + ").");
    };
    return Shape;
}());
