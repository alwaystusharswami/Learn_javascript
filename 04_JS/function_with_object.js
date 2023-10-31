function calculateCartPrice(...num){
    console.log(typeof num);
    return num;
}
function calculateCartPrice(val1,val2,...num){

    return val1+val2+" "+num;
}

console.log(calculateCartPrice(200,400,600,800));



const user={
    username:"tushar",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user);
handleObject({
    username:"swami",
    price:199
})