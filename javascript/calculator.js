 function val(val) {
    document.getElementById("display").value += val
}
function equalsign() {
    var a = document.getElementById("display").value
    var b = eval(a)
    document.getElementById("display").value = b
    document.getElementById("display2").value+=a
}
function del(){
    display.value=display.value.slice(0, -1)
}
function AC(){
    display.value=""
}