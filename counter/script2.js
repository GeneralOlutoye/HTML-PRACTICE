let count=0
// document.body.style.backgroundColor='green'
document.getElementById("decrease").onclick= function(){
    if(count<=0){document.getElementById(`counter`).innerHTML=Display(0)}
    count -=1
    document.getElementById(`counter`).innerHTML=count
}

document.getElementById("increase").onclick=function(){
    count +=1
document.getElementById(`counter`).innerHTML=count
}

document.getElementById("reset").onclick=function(){
    count =0
document.getElementById(`counter`).innerHTML=count
}
