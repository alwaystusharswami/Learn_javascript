let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

if (true) {
  let e = 10;
  const f = 20;
  var g = 30;
}

// console.log(e);           cannot access in global scope because it is define in scope level block 
// console.log(f);       
console.log(g);         // ! here we can access var in global scope 

