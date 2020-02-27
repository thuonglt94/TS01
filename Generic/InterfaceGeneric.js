var kv1 = { key: 1, value: "Steve" }; // OK
var kv2 = { key: 1, value: 123 }; // OK
console.log(kv1, kv2);
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
var result = proc.process(1, 'Bill');
console.log(result); //Output: processKeyPairs: key = 1, value = Bill
