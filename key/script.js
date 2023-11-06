let table=document.querySelector('#key');


window.addEventListener('keypress',function(e){
    table.innerHTML=`<table border= "1px">
    <tr>
      <th>key</th>
      <th>key Code</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode} </td>
      <td>${e.code}</td>
    </tr>
   
  </table>`
})