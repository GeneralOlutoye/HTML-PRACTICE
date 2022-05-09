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
    const cellIndex= this.getAttribute('cellIndex')

    if(options[cellIndex] != '' || !running){
        return
    }
    updateCell(this, cellIndex)
}
function changePlayer(){
    currentPlayer= (currentPlayer=='X')? 'O':'X'
    statusText.textContent=`${currentPlayer}'s turn`
}
function updateCell(cell, index){
    options[index]= currentPlayer
    cell.textContent= currentPlayer
}
function checkWinner(){
    let roundWon = false
    for (i=0; i<winConditions.length; i++){
        const condition = winConditions[i]

        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if(cellA=='' || cellB=='' || cellC==''){
            continue
        }
        else if(cellA == cellB == cellC){
            roundWon= true
            break
        }
    }
    if(roundWon){
        statusText.textContent= `${currentPlayer}wins`
        running= false
    }
    else if(!options.includes("")){
        statusText.textContent= `its a draw`
        running=false
    }
    else{
        changePlayer()
    }
} 
function reset(){
    currentPlayer=`X`
    statusText.textContent= `${currentPlayer}'s turn`
    cells.forEach(cell=>cell.textContent='')
    running=true 
}
