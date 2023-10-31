const marval_heros=["Thor","Iron-Man","Spider-Man"];
const dc_heros=["Super-Man","Flash","Bat-Man"];

// marval_heros.push(dc_heros);         //? add all array in another array
// console.log(marval_heros);

const allItems=marval_heros.concat(dc_heros)  //? added one ny one value 
console.log(allItems)

//! split operator
const allNew=[...marval_heros,...dc_heros]       //? split like glass 
console.log(allNew)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);






console.log(Array.isArray("tushar"));      // check this is array

// ! convert into array 

const cc=Array.from("tushar");
console.log(cc);


