let newtag = document.createElement('li')
let myOwnList = document.getElementById('myList')
newtag.textContent = 'peach'
myOwnList.style.backgroundColor='skyblue'
myOwnList.insertBefore(newtag, myOwnList.getElementsByTagName('li')[1])

document.body.style.backgroundColor='gray'

let newTag = document.createElement('h1')
newTag.textContent='DOM'
newTag.style.color = 'black'
newTag.style.backgroundColor='violet'
newTag.style.fontSize='30px'
document.body.append(newTag)

const show=document.getElementById('submit')
show.onclick= ()=> alert('YOU WON')

const showed= document.getElementById('change')
showed.onchange= ()=> alert('you are doing great')

const box= document.getElementById('move')
box.onmouseover=() => box.style.backgroundColor='black'
box.onmouseout=() => box.style.backgroundColor='green'

const move=document.getElementById('move')
const outerdiv=document.getElementById('outerdiv')

move.addEventListener('click', changeBlue)
outerdiv.addEventListener('click', changeBlue, true)

function changeBlue(){
    alert(`you selected ${this.id}`)
    this.style.backgroundColor='lightblue'
}

