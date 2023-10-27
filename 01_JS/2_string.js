// ! string in js

const name = "Tushar";

//* string interpolation
console.log(`Hello my name is ${name}`);

// how write string
//* 1.

const str = "hello world";
console.log(str);

// * 2.
const gameName = new String("Play loyal ");

console.log(gameName[1]);

console.log(gameName.__proto__); // search in browser console

// String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}anchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()length: 0name: "bold"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""


console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('l'));

console.log(gameName.substring(0,4));

// slice remove element 
console.log(gameName.slice(0,4));
console.log(gameName)

// trim  remove extra space
console.log(gameName.trim())


const url="https://tushar.com/tushar%20swami";
console.log(url.replace('%20','-'))

console.log(url.includes('tushar'));


const ss='ab-bc-cd-de';
console.log(ss.split('-'));  // create array of slipt file 


