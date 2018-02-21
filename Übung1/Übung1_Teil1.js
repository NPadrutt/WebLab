// Variablen Definitionen
var valueInt = 1;
var valueDecimal = 1.1;
var valueBool = true;
var valueString = "foo";
var valueObj = new Boolean();
var arr = [1, "Foo", 1.2, new Number()];

var func = new function () {
    console.log("hi");
};

console.log(typeof(valueInt));
console.log(typeof(valueDecimal));
console.log(typeof(valueBool));
console.log(typeof(valueString));
console.log(typeof(valueObj));
console.log(typeof(arr));
console.log(typeof(func));

// Array Definitionen
var colors = ["Blau", "Gelb", "Orange", "Taupe"];

colors.forEach(function(element) {
    console.log(element);
});

colors.push("Dunkeltürkis");
colors.push("Citrus");

console.log(colors.join(''));
console.log(colors.sort());

// Arrays
function calcSum(sum, number){
    return sum + (number * number);
}

console.log([2,3,5].reduce(calcSum, 0));

//Kunstruktoren
var obj = {
    prop1 : "foo",
    prop2 : 123,
    prop3 : false
};

for(var propName in obj){
    console.log(propName)
}

var obj = new Object();
var date = new Date();

function Intervall(value1, value2) {
    Intervall.prototype.isInside = function(value){
        if(value > value1 && value < value2){
            return true;
        }
        return false;
    }
}

var intervall = new Intervall(1, 23);
console.log(intervall.isInside(10));
console.log(intervall.isInside(25));

// Funktionen
function Mult(a, b){
    return a * b;
}

var x = function(a, b) { return a * b};


function fac(n){
    if(n < 0) return -1;
    if(n === 0) return 1;
    return n * fac(n-1)
}

console.log(fac(0));
console.log(fac(1));
console.log(fac(5));