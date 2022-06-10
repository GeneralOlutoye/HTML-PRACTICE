const getBtn= document.querySelector('#getReq')
const TxtArea= document.querySelector('#txtArea')
const display= document.querySelector('#display')

let city
getBtn.addEventListener('click', () => {
    city = TxtArea.value 
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d18828185d71c238c11c35c2d12b7eb&units=metric`)
    .then (weather =>{
        return weather.json()
    })
    .then(olutoye =>{
        display.textContent=`The weather in ${city} is ${olutoye.main.temp}°C`
    })
})

let course= 'softwareDev' 
let price= 100
let main_goal=['work as a dev', 'make lots of money', 'build my own app']

alert(goal)
console.log(course, price, main_goal)

console.log(main_goal[1])