// Iteration
// For & While loop iteration

// for loop iteration will keep running while condition is TRUE
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Looping Arrays, Breaking and Continuing

const hobbies = ["coding", 14, "music", "reading", 143, 234]

// Continue
for (let i = 0; i < hobbies.length; i++) {
    if (typeof hobbies[i] !== 'string') continue; // TYPE OF HOBBIES STRING እስካልሆነ ድረስ CONTINUE
    console.log(hobbies[i]);
}

// Break
for (let i = 0; i < hobbies.length; i++) {
    if (typeof hobbies[i] === 'number') break; // TYPE OF HOBBIES NUMBER ሲሆን BREAK.
    console.log(hobbies[i]);
}

// hobbies.forEach(r => console.log(r))

const birthyears = [1993, 2002, 2005, 1989];
const age = [];
for (let i = 0; i < birthyears.length; i++) {
    age.push(2023 - birthyears[i])
}
console.log(age);

// Looping Backwards & Loops in Loops

// Looping Backwards
for (let i = hobbies.length - 1; i >= 0; i--) {
    console.log(hobbies[i])
}

// Loops in Loops
for (let i = 0; i < 5; i++) {
    console.log(`Chapter ${i+1}`);
    for (let j = 0; j < 2; j++) {
        console.log("Lesson " + (j + 1))
    }
}

// While loops
let i = 0;
while (i < 3) {
    console.log("while loop " + i)
    i++
}

// Coding challenge 4

const bills = [120, 22, 459, 320, 43, 76, 876, 890, 432, 567]
const tips = []
const totals = []

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}

// calculate the tips
bills.forEach(bills => tips.push(calcTip(bills)))
console.log(tips)
    // Calculate totals
for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i])
}
console.log(totals)