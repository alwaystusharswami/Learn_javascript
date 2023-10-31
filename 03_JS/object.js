const JsUser={
    name:'Tushar',
    age:23,
    location:"Jaipur",
    isLoggedIn:false
}


console.log(JsUser)

console.log(JsUser.name);
console.log(JsUser["age"]);





// ! add symbol in object 
const mySym=Symbol("key1");

JsUser[mySym]="my Key1";
console.log(JsUser)
console.log(JsUser[mySym]);

JsUser.greeting=function(){
    console.log(`Hello`);
}
console.log(JsUser)
console.log(JsUser.greeting()); 



