// type conversion and coersion
// by kaleab dereje

// most of the time the inputs we get from the input fields are strings

// TYPE CONVERSION

const birthYear = "1999"
const merchNumber = 23

//let's try to add 18 to the birthYear

console.log(birthYear + 18) // o/p => 199918

// we use Number() function to convert strings to the type of numbers

console.log(Number(birthYear) + 18) // o/p => 2017

//There's also another String function which will help to convert numbers to string

console.log(merchNumber + 12) // =>35
console.log(String(merchNumber) + " jordan!") // =>2312 jordan!

// TYPE COERCION

// Javascript will automatically convert types in special circumstances

console.log("I'm " + 23 + " years old.") // here we can see 23 is converted to string otherwise there is no other ways to add concatinate strings with number as we know on otherprogramming languages.
let check = "I'm " + 23 + " years old.";
console.log(typeof(check)) // string

// isntead of using + when we use "-"" and "/" it will convert to the opposite type

let check2 = "23" - 10 - "3" //as we have saw on the above example we expect it to be string but it's - so the type should be number

console.log(check2) // 10

console.log(typeof(check2)) // number

console.log(typeof("23" + 10 + "3")) // string

// ********* Additional Information *******************

// Truthy and Falsy values

// Falsey values are: "", 0, undefined, Nan, null
// the other 's are all truthy values #fyi {} has true value