var Concatenator = /** @class */ (function () {
    function Concatenator() {
    }
    Concatenator.prototype.concatenateArray = function (inputArray) {
        var returnString = "";
        for (var i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ",";
            returnString += inputArray[i].toString();
        }
        return returnString;
    };
    return Concatenator;
}());
var stringConcatenator = new Concatenator();
var numberConcatenator = new Concatenator();
var stringArray = ["first", "second", "third"];
var numberArray = [1, 2, 3];
var stringResult = stringConcatenator.concatenateArray(stringArray);
var numberResult = numberConcatenator.concatenateArray(numberArray);
console.log(stringResult);
console.log(numberResult);
;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("Key = " + key + ", val = " + val);
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill
