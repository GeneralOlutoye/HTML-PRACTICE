const cells= document.querySelectorAll('.cell')
const restart= document.querySelector('#restart')
const statusText= document.querySelector('#print')
let currentPlayer= 'X'

let winConditions = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
]

let options= ['','','','','','','','','']
let running= false

initializeGame();

function initializeGame(){
    cells.forEach(cell=> cell.addEventListener('click', cellClicked))
    restart.addEventListener('click', reset)
    statusText.textContent= `${currentPlayer}'s turn`
    running= true
}
function cellClicked(){

}
function changePlayer(){

}
function updateCell(){

}
function reset(){

}
