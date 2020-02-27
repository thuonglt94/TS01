interface KeyPair<T, U> {
  key: T;
  value: U;
}

var kv1: KeyPair<number, string> = { key:1, value:"Steve" }; // OK
var kv2: KeyPair<number, number> = { key:1, value:123 }; // OK
console.log(kv1, kv2);

interface IKeyValueProcessor<T, U>
{
  process(key: T, val: U): void;
};

class kvProcessor implements IKeyValueProcessor<number, string>
{
  process(key:number, val:string):void {
    console.log(`Key = ${key}, val = ${val}`);
  }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill