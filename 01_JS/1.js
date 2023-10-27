//! variable

var a = 10; // variable
let b = 20; // variable
const c = 30; //const

console.table([a, b, c]);

//! data types and ecma standards

("use strict");
// always use => use strict line

//? dtata types


// 1.number
// 2.BigInt
// 3.String
// 4.Boolean
// 5.null => stand alone value
// 6.undefined
// 7.symbol
// 8.Object

//! Data type conversion factor

let score = 33;

let s="abc";
let p=true;

console.table([typeof score,typeof s,typeof p ]);

//* another way to right number type 

let valNumber=Number(22);
console.log(typeof valNumber);



//! why number to string 
console.log(2+2);
console.log("2"+2);

console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

// prefix and postfix
let v=2;
v++;
console.log(v++);
console.log(++v);


//! comparison type 
console.log(2>1);
console.log("2">1);
console.log(null>0);
console.log(null==0)
console.log(null>=0)

console.log("2"==2)
console.log("2"===2) // check data type also



// !! data types summary 
// there are two types of data 
//* 1.primitive (7 types)
// 1.string
// 2.Number
// 3.boolean
// 4.null      typeof null is Object 
// 5.undefined
// 6.Symbol
// 7.BigInt

//* 2.reference
// 1.Array  [" "," "]
// 2.Objext {key:value}
// 3.function name(params) {}

// ! diifference b/w stack and heap memory
// stack store Primitive data
// heap store non primitive data 



