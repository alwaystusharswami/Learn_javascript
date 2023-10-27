const score=400;
console.log(score);

const balance=new Number(100);
console.log(balance)

// to get length 
console.log(balance.toString().length)

// to float 
console.log(balance.toFixed(3));



const otherNumber=23.8966;
console.log(otherNumber.toPrecision(4))

const hundreds=10000000000;
console.log(hundreds.toLocaleString('en-In'));


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *? maths 

console.log(Math);

// negative to postive 
console.log(Math.abs(-4));

// round off to nearest 
console.log(Math.round(4.3));
console.log(Math.round(4.7));

// cell and floor function 
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));

// minimum number 
console.log(Math.min(1,2,3,2,1,-1));

// maximum number 
console.log(Math.max(1,2,32,32,3,23 ,2,333));

// *Math random function ===>> digit from 0 to 1 ,,,,,,,,1 not included 
console.log(Math.random())

// to value 0 to 9 in random function 
console.log(Math.random()*10)

// to get value 1 to 10
console.log(Math.floor(Math.random()*10+1))


// to get distance value 
const min =10;
const max=20;
console.log(Math.floor((Math.random()*(max-min+1))+min));

