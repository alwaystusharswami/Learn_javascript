// flase  form =>  //! false,0,-0,BigInt on,"",null , undefined, NaN


// truthy => //! "0",'false'," ",[],{},  function(){}



// else if condition 
if(true){
    console.log('hye')
}

if(false){
    console.log('hye2')
}else{
    console.log('else hye')
}

let a=2,b=5;
if(a==b){
    console.log(`a equal to b`);
}else if(a<b){
    console.log(`b is greater`);
}else if(a>b){
    console.log(`a is greater`);
}else if (a===b){
    console.log(`a equal to b and both type are also same.`)
}