// document.getElementById('f1').onclick=function(){
//     alert("owl");
// }



document.querySelector('img').addEventListener('click',function(e){
    // alert("flower");
    console.log(e.target.parentNode);

    let removeIt=e.target.parentNode;
    removeIt.remove();
    console.log(e.target.tagName);
},false);

// read about ==>  type,timeStamp,defaultPreventd 
// target, toElement , srcElement , currenttarget
// clinetX, clientY screenX, screenY , offset
// altkey,ctrlKey,shiftKey, Keycode 