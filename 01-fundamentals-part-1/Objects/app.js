// Objects

const profile = {
    name: "Kaleab",
    age: 20,
    gender: "Male",
    hobbies: ["coding", "music", "voluntering"],
    hasDriverLicense: true
}

console.log(`Hello,I'm ${profile.name},${profile.age} years old student.`)

// Dot vs bracker notations

// Dot notations
console.log(profile.name)

// Bracket notations
console.log(profile["gender"])

//For example look this example for better classification of the bracket notation

// assume that the values of the finder is user prompted
const finderKey = "name"

if (profile[finderKey]) {
    console.log(profile[finderKey])
} else {
    console.log("Wrong request!")
}

// we can also add object elements using these methods
const twitterLink = "@Kaleab_thoughts"

profile["twitter"] = twitterLink
console.log(profile);


// we can also add using these dot notations
profile.twitter = twitterLink
console.log(profile)

// Objects method
// any function that is attached to the function is called a method.

const profile2 = {
    name: "Kaleab",
    birthYear: 2002,
    hasDriverLicense: false,
    //     calcAge: function() {
    //         console.log(this)
    //         return 2022 - this.birthYear
    //     }
    // }
    calcAge: function() {
        this.age = 2022 - this.birthYear
        return this.age
    },
    driverLicenseChecker: function() {
        return ` ${this.name} ${this.hasDriverLicense ? " has a driver license." :
        " has no driver license."}`
    }
}

console.log(profile2.calcAge())
console.log(profile2.driverLicenseChecker())
    // console.log(profile2['calcAge']())


// CODING CHALLENGE 3
// BMI calculator

const Data = {
    fullname: "Kaleab Dereje",
    mass: 45,
    height: 1.95,
    calcBMI: function() {
        return this.BMI = this.mass / (this.height ** 2)
    },
    result: function() {
        return `Hello ${this.fullname}, ${this.BMI >= 19 ? "you have Average BMI." :
         "you have Low BMI."}`
    }
}

console.log(Data.calcBMI())
console.log(Data.result())
console.log(Data.BMI);