// Closures
var myStack = (function () {
    var myPrivateStack = [];

    return {
        push: function (obj) {
            myPrivateStack.push(obj);
        },
        pop: function () {
            myPrivateStack.pop();
        }
    };
}());

// Objekt Hierarchien
function Shape(){
    this.x = 0;
    this.y = 0;
}

function Rectangle() {
    this.prototype = new Shape();
}


function Circle() {
    this.prototype = new Shape();
}

Circle.prototype.draw = function(){
    console.log("Circle wurde an Position (" + this.x + ", " + this.y +") gezeichnet.");
};
Object.defineProperty(Circle.prototype, "area", {
    get: function () {
        return this.x * this.y;
    }
});

Rectangle.prototype.draw = function(){
    console.log("Rectangle wurde an Position (" + this.x + ", " + this.y +") gezeichnet.");
};
Object.defineProperty(Rectangle.prototype, "area", {
    get: function () {
        return this.x * this.y;
    }
});

Shape.prototype.draw = function(){
    console.log("Shape wurde an Position (" + this.x + ", " + this.y +") gezeichnet.");
};
Object.defineProperty(Shape.prototype, "area", {
    get: function () {
        return this.x * this.y;
    }
});


var circle = new Circle();
circle.x = 3;
circle.y = 7;
var rectangle = new Rectangle(7, 12);
rectangle.x = 7;
rectangle.y = 12;
var shape = new Shape(25, 3);
shape.x = 25;
shape.y = 3;


circle.draw();
console.log(circle.area);

rectangle.draw();
console.log(rectangle.area);

shape.draw();
console.log(shape.area);

// Da Area hier nicht ausgegeben wird (warum ist mir nicht ganz klar) kann direkt das Objekt verwendet werden.
// Andernfalls könnte eine Art DTO mit den gewünschten Objekten erstellt werden, damit nur diese serialisiert werden.
console.log(JSON.stringify({Circle : circle}));
console.log(JSON.stringify({Rectangle : rectangle}));
console.log(JSON.stringify({Shape : shape}));

//Was ist der Unterschied zwischen Objekt-Hierarchien in JavaScript und Vererbung in anderen OO Programmiersprachen? Was sind die Vor- und Nachteile?
/*
Bei der Vererbung wird definiert, dass das abgeleitete Objekt eine Spezialisierung des Übergeordneten Objektes ist. Damit ist die Kopplung sehr stark.
Bei Prototypen wird mehr auf das darüberliegende Objektverwiesen als eine Art Grundlage. Die Kopplung ist damit eher lose, ist damit aber auch weniger "offensichtlich".

 */
