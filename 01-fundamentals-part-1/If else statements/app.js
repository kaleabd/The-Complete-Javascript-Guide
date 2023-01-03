// Taking decisions using if/else statements
//written by kaleab Dereje.

//this is a sample problem for a driving liscence giving system
// it will console "You can have your lisence!" if the user's age is valid
//else it'll tell the user when's he/she gonna be valid

const age = 17;
const validAge = 21;

if (age >= validAge) {
    console.log("You can have your lisence!")
} else {
    // i can console strings using multiple methods one is using "", ''
    console.log("come again after " + (validAge - age) + " years.");
    // the other way is using ``(template string) this helps to use variables and values inside the
    // strings only by adding ${} in it.
    console.log(`you're to young, come again after ${validAge - age} years.`)

}

// and to briefly understand how if else statements helps to take decisions
// let's take this example

const abebe = "male" // abebe is male
let isMale = null // we initialize the gender identifier as null/no value

if (abebe === "male") { // if it's male return isMale with true value
    isMale = true
} else { // else return isMale with false value
    isMale = false
}

console.log(isMale)



// Additonal Information

//Equlity operators: ==, ===

// What is the difference between them?

// === is called the strict equality, it doesn't perform type coercion, checks the both values are exactly the same

// == is called the loose equality operator, does type coercion,

console.log("18" === 18) // returns false because it compares the exact values without changing the types using type coercion
console.log("18" == 18) // returns true because it performs type coercion