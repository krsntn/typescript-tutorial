// string =========================================
let hello: string = 'world';

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// boolean =========================================
let isDone: boolean = false;

// array =========================================
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tupleA =========================================
let x: [string, number] = ['hello', 3];
// console.log(x[3]); will show error as index of 3 is not exist in x

// enum =========================================
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// unknown =========================================
let notSure: unknown = 4;
notSure = 'maybe a string instead';
notSure = false;

declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
// const aNumber: number = maybe; //Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
  // const aString: string = maybe; // Type 'boolean' is not assignable to type 'string'.
}

if (typeof maybe === 'string') {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  // const aBoolean: boolean = maybe; // Type 'string' is not assignable to type 'boolean'.
}

// any =========================================
declare function getValue(key: string): any;
const str: string = getValue('mystring');

let looselyTyped: any = 4;
looselyTyped.ifItExists();
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed(); // Object is of type 'unknown'

// void =========================================
function warnUser(): void {
  console.log('This is my warning message.');
}

// null and undefined =========================================
let u: undefined = undefined;
let n: null = null;

// object =========================================
let o: { height: number; weight: number } = { height: 10, weight: 20 };

// type assertions =========================================
// a way to tell the compiler “trust me, I know what I’m doing.”
let someValue: unknown = 123;
let strLength1: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;
