let button=document.getElementById("buttonCount"),counter=0,addClick=(button.addEventListener("click",()=>{addClick()}),()=>{var t=9<++counter?counter:"0"+counter;document.getElementById("text").innerText=t});