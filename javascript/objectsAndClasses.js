var Date= new Date
console.log(Date)

// OBJECTS/CLASSES
// Objects are 

const car={
    model:"Mustang",
    color:"red",
    year:2023,

    drive: function(){
        console.log("You drive the car");
    },
    brake: function(){
        console.log("You step on the brakes"); 
    }
}

const school={
    name: "Zeekay",
    type:"Model college",
    staffs:10,

    newStaff: function() {
        console.log("New staff added");
    } 
}

const Nigeria={
    state:36,
    ethnicity:4400,
    capital:"FCT ABUJA",

    fuelScarcity:()=>console.log("No fuel"),
    
    safety:(unsafe, safe)=>console.log()
}

console.log(Nigeria.state, Nigeria.capital)
 Nigeria.safety()