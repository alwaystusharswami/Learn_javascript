const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for (let index = 0; index < 6; index++) {
        color+=hex[Math.floor((Math.random())*16)];

        
    }
    return color;
}


let body=document.body;
let start=document.querySelector('#start');
let stop=document.querySelector('#stop');
let interval=null;

start.addEventListener('click',function(){
   if(interval==null){
    interval= setInterval(() => {
        body.style.backgroundColor=randomColor();
            
        }, 1000);
   }
})

stop.addEventListener('click',function(){
clearInterval(interval);
interval=null;
});