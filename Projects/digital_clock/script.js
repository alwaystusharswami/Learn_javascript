const clock=document.getElementById("clock");

// console.log(clock);

setInterval(()=>{
    clock.innerHTML=new Date().toLocaleTimeString();

},1000);
