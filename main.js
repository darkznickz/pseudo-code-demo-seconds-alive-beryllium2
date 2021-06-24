/* CALCULATE THE APPROXIMATE NUMBER OF SECONDS SINCE USER'S BIRTH */


let yearBirthInput = prompt("Year of Birth of User")
let monthBirthInput = prompt("Birth Month of User in Number")

let yearBirth = parseFloat(yearBirthInput)
let monthBirth = parseFloat(monthBirthInput)

let monthBirthisInvalid = Number.isNaN(monthBirth)
let yearBirthisInvalid = Number.isNaN(yearBirth)

if (monthBirthisInvalid || yearBirthisInvalid) {
    alert("Please use a Valid Number of Year and Month!")
    document.write("Please use a Valid Number of Year and Month!")
} else {

let currentYear = new Date().getFullYear()
    console.log(currentYear)
let currentMonth = new Date().getMonth()
    console.log(currentMonth)

let secsInMonth = 60 * 60 * 24 * 30
    console.log(secsInMonth)

let secsInYear = secsInMonth * 12
    console.log(secsInYear)

let secsInBirthYear = secsInMonth * (12 - monthBirth)
    console.log(secsInBirthYear)

let secsCurrentYear = secsInMonth * currentMonth
    console.log(secsCurrentYear)

let result = secsInBirthYear + secsCurrentYear
    console.log(result)

    document.write(result)
}










