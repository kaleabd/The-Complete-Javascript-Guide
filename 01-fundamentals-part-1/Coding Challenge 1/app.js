// BMI calculator
function BMI(mass, height) {
    return mass / height ** 2
}

let markMass = 78
let markHeight = 1.69
let johnMass = 92
let johnHeight = 1.95
let markBMI = BMI(markMass, markHeight)
let johnBMI = BMI(johnMass, johnHeight)
let markHigherBMI = markBMI > johnBMI

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI)