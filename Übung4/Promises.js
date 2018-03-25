var testArray = ["foo", "TestString", "SomethingElse"];

var p1 = new Promise(function(resolve, reject){
    setTimeout( function() {
        var failureOccured = false;

        var returnValue = [];

        testArray.forEach(function (value, index, array) {

            if (typeof value === 'string' || value instanceof String) {
                returnValue.push(value.toUpperCase());
            }
            else {
                failureOccured = true;
            }
        });


        if (failureOccured) {
            reject("A Value was not a string");
        }
        else {
            resolve(returnValue);
        }
    }, 3000);
});

var p2 = function (value) {
    value.sort(function(a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;}
        );
    return value;
};


console.log("Promise start");
p1.then(p2).then(function (value) { console.log(value) })