const cell= document.querySelectorAll('.cell')
const restart= document.querySelector('#restart')
const print= document.querySelector('#print')

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

let Player_X= 'x'
let Player_O= 'o'
let board= ['','','','','','','','','']

let is_Player_O_Turn= false

startGame()

restart.addEventListener('click', startGame)
function startGame(){
    is_Player_O_Turn= false
    cell.forEach(cell =>{
        cell.classList.remove(Player_Xl)
        cell.classList.remove(Player_O)
        cell.removeEventListener('click', handleCellClick)
        cell.addEventListener('click', handleCellClick, {once: true})
    })
    setBoardHover()
    print.classList.remove('show')
}

function handleCellClick(e){
    // const cell e.target
    // const classList
}