var greeting = "Hello, World";
console.log(greeting);

var sail = "Developer's cabal";
console.log(sail);

var status = "Watching Netflix";
Mystatus = "Relaxing at the beach";
console.log(Mystatus);

mysail = "General";
console.log(mysail);

var myDressing = "so modest";
mydressing = "so highclass";
console.log(mydressing);

myDressing = mysail;
console.log(myDressing);

var campus = "senate building";
var church = "mission house";

church = campus;
console.log(church);

Mychurch = "redeem";
console.log(Mychurch);

var temperature = "100 degrees celcius";
temperature = "0 degrees celcius";
console.log(temperature);

var numberOfLikes = 12;
numberOfLikes = 13;
console.log(numberOfLikes);

var instagramLike = 250;
console.log(instagramLike+10);

var myCalculator = 3;
myCalculator = 4;
console.log(myCalculator/2);

var daudu;
console.log(daudu);

 var adeola;
 adeola = "beautiful"

 var segun ="The length of the content Adeola is "+adeola.length;
 console.log(segun);

 var pancho = "lunch"
 varcase = pancho.toUpperCase();

 let anu = 10;
 console.log(anu);
 anu = 20
 console.log(anu);

 var colorBlue = "characteristics, functions, status"
 var newColor = colorBlue.split(',')
 console.log(newColor)

 var joel ="Parenthesis"
 var segun = joel[0] + joel[3] + joel[5]
 console.log("The first, third and fifth letter of var joel is = " + segun);

 var segun = joel.split('')
 console.log(segun)

 var segun = joel [5]
 console.log(segun)
 console.log(typeof segun);

 var word = "innovation"
 console.log(word[word .length-1]);

 var a = 10
 var b = 20;
 var c = a+b;
 console.log(c);
 
 var a = 10
 var b = 20;
 var c = a-b;
 console.log(c);
 
 var a = 10
 var b = 20;
 var c = b/a;
 console.log(c);
 
 var a = 15
 var b = 20;
 var c = b%a;
 console.log(c);

 var d = "25"
 var e = 25
 var result = d===e;
 console.log(result)
 
 var d = "15"
 var e = 5000
 d=15;
 var result = d+e;
 console.log(result)
 
 var d = "15"
 var e = 5000
 d=parseInt(d,10)+e
 console.log(d)

 var a = ["segun", "osas", "mylord", "cultist", "pancho", "zubs", "joel"]
 console.log(a[3]);

 var c = {color: "red", name:"modupe"}
 console.log(c.name)
 
 var c = {color: "red", name:"modupe"}
 var mo = c["name"]
 console.log(mo)

 var text_colors=[
 ["tomatoes", "#f00"],
 ["celery", "#0f0"],
 ["Blueberries", "#00f"],
 ["Lemons", "#ff0"],
 ["Grapes", "#f0f"],
 ["koolaide", "#0ff"],
 ];
 console.log(text_colors[2][0])
 console.log(text_colors[5][0])

 var people = [
     {sex:"male", name:"jeff"},
     {sex:"female", name:"megan"},
     {sex:"male", name:"Taylor"},
     {sex:"female", name:"Madison"},
 ];
 console.log(people[2].name)

 const items = [
     {name:"bike", price:100},
    {name:"TV", price: 200},
    {name:"Album", price: 10},
    {name:"Book", price: 5},
    {name:"Phone", price: 500},
    {name:"Computer", price: 1000},
    {name:"Keyboard", price: 25},
];

var newitems = items.filter((items)=>{return items.price<=100})
console.log(newitems)
console.log("")

//code to print out date and time
var currentDate= new Date
console.log("current date and time is " + currentDate)

var savings= 100;
var interest = 0.04;
console.log(savings*interest)

var private=100;
var public=20;
console.log(private-public)

var rightAnswer=true
console.log(rightAnswer)

var offSwitch =false
console.log(offSwitch)

var isMorning=true;
var isAfternoon= !isMorning;
console.log(isAfternoon)

var isEvening=!isMorning
console.log(!isAfternoon)

var big="7";
var small=3;
var result= big==small;
console.log(result)

var go=true
var stop=false
var slowDown=go!==stop
console.log(slowDown)

var petName= "Jessie"
var breed="Labrador"
var age=3
var petDescription=petName+breed+", "+age
// console.log("petName and age = " + petDescription)
console.log("petName and age = "+ petName + "-" + breed + "," + " " + age)

// create a variable numberOfWaterTaken with a value number 5,
// and another variable with a name timeDifference given a value 3Hours.
// give an output that looks like (Water consumption: 5, 
// Time difference: 3Hours)

var numberOfWaterTaken=5
var timeDifference = "3Hours"
console.log("water consumption: " + numberOfWaterTaken)
console.log("Time difference: " + timeDifference)

var availableCars=35
var garageSize=20
var readyToPark= garageSize<availableCars
console.log(readyToPark)

var minimum=5
var maximum=10
var result=(maximum>maximum)
console.log(result)

// check if battery level is less than or equal to 20 with the appropriate operator.
var batteryLevel= 10
var low= batteryLevel<=20
console.log("Low battery level: " + low)

// if my battery level is 30 and the expected battery low level is 30
// find out the output of my current battery level if it is truly low or not

var mybatteryLevel=30
var currentbatterylevel=30
var currentResult=mybatteryLevel<=30
console.log("Battery low: " + currentResult)

// JS learning pattern
// JS Basics
// Types of comparison
// Conditions
// Loop
// Arrays
// Object

// store the result of a level 2 game to be either true or false
// if the current point of the candidate is 15, but the point to get to 
// level two is 10.

var level2=10
var gamerPoint=15
var gamerlevel= gamerPoint>=level2
console.log("Level 2: " + gamerlevel)

// check if solved is less than or equal to minimum 
// provided solved is 20 and minimum is 10

var solved=20
var minimum=10
var result=solved<=minimum
console.log("Solved is less than or equal to minimum = " + result)

// compare position to expected with the inequality operator and display
// the result in the console provided position is with the value last, and 
// expected a value first

var position="last"
var expected="first"
var Result=position!==expected
console.log(Result)

// in a problem description, give the console output if 
// variable age is 19, what is the driving age if the expected 
// age to drive is 16?

var age=19
var drivingAge=16
var driverage=age>=drivingAge
console.log("Driver age qualifies to drive " + driverage )

//  provide a condition to be true with our output number of days 10

if(true){
    console.log("numberOfDays = 10");
}

if(false){
    console.log("numberOfDays = 10");
}

// using the if statement to buy the comparison between two variables
// high temperature and low temperature with the value 40 degrees celcius
// and 10 degree celcius respectively to be true if low temperature
// is less than the high temperature 

var highTemperature=40
var lowTemperature=10
var temperature= lowTemperature<highTemperature
if(true){
    console.log(temperature)
}

