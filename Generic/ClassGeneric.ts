class Concatenator<T> {
  concatenateArray(inputArray: Array<T>): string {
    var returnString = "";
    for (var i = 0; i < inputArray.length; i++) {
      if (i > 0)
        returnString += ",";
      returnString += inputArray[i].toString();
    }
    return returnString;
  }
}

var stringConcatenator = new Concatenator<string>();
var numberConcatenator = new Concatenator<number>();

var stringArray: string[] = ["first", "second", "third"];
var numberArray: number[] = [1, 2, 3];
var stringResult = stringConcatenator.concatenateArray(stringArray);
var numberResult = numberConcatenator.concatenateArray(numberArray);
console.log(stringResult);
console.log(numberResult);

/* Generic class implement generic implement */

interface IKeyValueProcessor<T, U>
{
  process(key: T, val: U): void;
};

class kvProcessor<T, U> implements IKeyValueProcessor<T, U>
{
  process(key:T, val:U):void {
    console.log(`Key = ${key}, val = ${val}`);
  }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill