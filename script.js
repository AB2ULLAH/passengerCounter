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
let peopleCounter = document.getElementById("people-counter");
let personCounted = 0;

if (personCounted == 0) {
    var buttonDisabled = document.getElementById("decrement-btn");
    buttonDisabled.disabled = true;
}

function countPerson() {
    personCounted++
    peopleCounter.innerText = personCounted

    if (personCounted > 0) {
        buttonDisabled.disabled = false;
    }
}
function deductPerson() {
    personCounted--
    peopleCounter.innerText = personCounted

    if (personCounted <= 0) {
        buttonDisabled.disabled = true;
    }
}
function resetPerson() {
    const confirmation = prompt("Do you want to rest ? || y for yes , n for no").toLowerCase()
    if (confirmation === 'y') {
        location.reload();
    }
}
let saveVar = document.getElementById("people-saved")
function save() {
    personCounted
    saveVar.innerText = personCounted

    let previousEntries = document.getElementById('prev-entries');

    let entriesKeeper = " " + personCounted + " - ";
    if (personCounted <= 0) {
        alert('Add People to save')
    } else
        previousEntries.innerText += entriesKeeper
    personCounted = 0;
    peopleCounter.textContent = personCounted;
}

welcomeMessage = document.getElementById("welcome")

let name = "Abdullah."
let greeting = "Hi! Welcome "

welcomeMessage.innerText = greeting + name
welcomeMessage.innerText += "👋"

addEventListener(onclick(), errorMessage())