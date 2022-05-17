

// const getData= ()=>{
//     fetch('https://reqres.in/api/users?page=2').then(i=>{
//         i.json();
//     })
//     .then(iData =>{
//         console.log(iData)
//     })
// }

// getBtn.addEventListener('click', getData)
const getBtn= document.querySelector('#getReq')
const TxtArea= document.querySelector('#txtArea')
const display= document.querySelector('#display')


const getData= ()=>{
        fetch(`https://api.openweathertmap.org/data/2.5/weather?q=${city}&appid=5d18828185d71c238c11c35c2d12b7eb&units=metric`)
        .then(i=>{
            i.json();
        })
            .then(iData =>{
                display.textContent=i.main.temp
            })
    }

getBtn.addEventListener('click', getData)