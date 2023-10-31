const myArr=[0,1,2,3,4,'tushar'];


console.log(myArr)
const myArr2=new Array(1,2,3,4,5);
console.log(myArr2);

myArr.push(6);     // add at last position 
console.log(myArr)
myArr.unshift(7);   // add at first position
console.log(myArr)

myArr.pop();        // remove last element
console.log(myArr)

myArr.shift();    // remove first element 

console.log(myArr.includes(1));  // check this element present or not 


console.log(myArr.indexOf(9));     // check index of array

console.log(typeof myArr.join())    // type string 
console.log(myArr)




const myNumber=myArr.slice(1,3);   //return new array not include last index
console.log(myNumber)
console.log(myArr)



const myNum=myArr.splice(1,4);   //return new array and remove value from original array  => include last index
console.log(myNum)
console.log(myArr)






