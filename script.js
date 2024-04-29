// JavaScript Tasks 
// let myAge = 23
// console.log(myAge)
// let myAge = 23
// let humanDogRatio = 7 
// let myDogAge= myAge * humanDogRatio
// console.log(myDogAge)
// let bonusPoints = 50
// console.log(bonusPoints)
//  bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
//  bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
//  bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
// function increament(){
//     console.log("The Button was clicked.")
// }
// let lap1 = 35
// let lap2 = 34
// let lap3 = 33
// function logfunc(){
//    let sum = lap1 + lap2 + lap3
//     console.log(sum)
// }
// console.log(sum)
let peopleCounter = document.getElementById("people-counter")
console.log(peopleCounter)
let personCounted = 0
function countPerson(){
    personCounted++
    peopleCounter.innerText = personCounted
}
let saveVar = document.getElementById("people-saved")
function save() {
    personCounted
    saveVar.innerText = personCounted
    
let previousEntries = document.getElementById('prev-entries');

let entriesKeeper = " " + personCounted + " - ";

previousEntries.innerText += entriesKeeper
personCounted = 0;
peopleCounter.textContent = personCounted; 
}

welcomeMessage = document.getElementById("welcome")

let name = "Abdullah."
let greeting = "Hi! Welcome "

welcomeMessage.innerText = greeting + name

welcomeMessage.innerText += "👋"
