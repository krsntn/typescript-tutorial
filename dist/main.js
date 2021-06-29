// string =========================================
var hello = 'world';
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// boolean =========================================
var isDone = false;
// array =========================================
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tupleA =========================================
var x = ['hello', 3];
// console.log(x[3]); will show error as index of 3 is not exist in x
// enum =========================================
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// unknown =========================================
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
// 'maybe' could be a string, object, boolean, undefined, or other types
// const aNumber: number = maybe; //Type 'unknown' is not assignable to type 'number'.
if (maybe === true) {
    // TypeScript knows that maybe is a boolean now
    var aBoolean = maybe;
    // So, it cannot be a string
    // const aString: string = maybe; // Type 'boolean' is not assignable to type 'string'.
}
if (typeof maybe === 'string') {
    // TypeScript knows that maybe is a string
    var aString = maybe;
    // So, it cannot be a boolean
    // const aBoolean: boolean = maybe; // Type 'string' is not assignable to type 'boolean'.
}
var str = getValue('mystring');
var looselyTyped = 4;
looselyTyped.ifItExists();
looselyTyped.toFixed();
var strictlyTyped = 4;
// strictlyTyped.toFixed(); // Object is of type 'unknown'
// void =========================================
function warnUser() {
    console.log('This is my warning message.');
}
// null and undefined =========================================
var u = undefined;
var n = null;
// object =========================================
var o = { height: 10, weight: 20 };
// type assertions =========================================
// a way to tell the compiler “trust me, I know what I’m doing.”
var someValue = 123;
var strLength1 = someValue.length;
var strLength2 = someValue.length;
