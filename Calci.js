function add() {
    var n1 = document.getElementById('no1').value
    var n2 = document.getElementById('no2').value

    var result = Number(n1) + Number(n2)
    document.getElementById('res').innerHTML = result

}
function sub() {
    var n1 = document.getElementById('no1').value
    var n2 = document.getElementById('no2').value

    var result = n1 - n2
    document.getElementById('res').innerHTML = result

}
function mul() {
    var n1 = document.getElementById('no1').value
    var n2 = document.getElementById('no2').value

    var result = n1 * n2
    document.getElementById('res').innerHTML = result

}
function div() {
    var n1 = document.getElementById('no1').value
    var n2 = document.getElementById('no2').value

    var result = n1 / n2
    document.getElementById('res').innerHTML = result

}