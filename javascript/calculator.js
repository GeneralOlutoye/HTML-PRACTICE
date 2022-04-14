function val(val) {
    document.getElementById("display").value += val
}
function equalsign() {
    var a = document.getElementById("display").value
    var b = eval(a)
    document.getElementById("display").value = b
} 