function one(){
    const userName="tushar";
    function two() {
        const website="youtube";
        console.log(userName);
        
    }
    // console.log(website);   //! we cannot access outside block scope 
    two();
}
one();





// !hoisting 
console.log(addOne(5));
function addOne(num){
    return num+1;
}


console.log(addTwo(10));     // here we cannot access addTwo function 
const addTwo=function(num){
    return num+2;

}