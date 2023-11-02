const user={
    userName:"tushar",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName} welcome to website`);
    }
}
console.log(this);    // here this doesnot any thing in console but in browser it show all property of window object 

console.log(user.userName);
console.log(user.price);
console.log(user.welcomeMessage());



const chai=function(){
    let userName="tushar";
    console.log(`${this.userName} hye welcome `);
}
chai();



//! arrow function 

const chai2=()=>{
    let  username="tushar";
    console.log(`${this.username} chai2`)
}
chai()



// pure arrow function 
// syntax of arrow function  //! ()=>{}

const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(3,5));