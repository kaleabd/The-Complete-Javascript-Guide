// BMI calculator
function BMI(mass, height) {
    return mass / height ** 2
}

// you can check the result by playing arounding/changing the values of the mark's and johna's height and weight

let markMass = 78
let markHeight = 1.69
let johnMass = 92
let johnHeight = 1.95
let markBMI = BMI(markMass, markHeight)
let johnBMI = BMI(johnMass, johnHeight)
let markHigherBMI = markBMI > johnBMI

if (markHigherBMI) {
    console.log(`Mark's (${markBMI}) BMI is higher than John's (${johnBMI}) BMI.`)
} else {
    console.log(`John's (${johnBMI}) BMI is higher than Mark's (${markBMI}) BMI.`)
}