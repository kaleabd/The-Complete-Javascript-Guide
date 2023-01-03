// Arrays

// There are 2 types of creating arrays the first one is using [] and the other form is by using ' new  Array() ' method
const friends = ["abebe", "solomon", "kaleab", "mekdes", "biruk", "moti"]
const hobbies = new Array("football", "coding", "music", "basketball", "videography", "hacking")

// Indexing
// starts 0 - n
console.log(friends[0])

// Length
// to get the length of the array we use .length
console.log(friends.length)

// Challenge 
// print all the friends with their hobbies.
friends.forEach((items, index) => console.log(items + "'s loves " + hobbies[index] + "."))

// EXERCISE
const calcAge = (birthyear) => {
        return 2015 - birthyear
    }
    // calculate the usersyear birthdate using the above function
const usersyear = [1992, 2004, 1990, 1985, 1955, 1884]

// solution
usersyear.forEach((years) => console.log(calcAge(years)))


// Basic Array Operarions(METHODS)
const user_name = ["someone", "anotherone"]

// push method
// it'll add the element to the end of the array
user_name.push("another someone")
console.log(user_name)

// unshift method
// it'll add the element to the start of the array
user_name.unshift("other another one")
console.log(user_name)

// pop method
// it'll remove element from the end of the array
user_name.pop()
console.log(user_name)

// shift method
// it'll remove elemenet from the start if the array
user_name.shift()
console.log(user_name);

// .indexOf method
// it'll help us to identify the index of the specific elemnts
console.log(user_name.indexOf("someone"))

// .includes method
// it'll return boolean value whether it's exists on the array or not
console.log(user_name.includes("kaleab")) // false
console.log(user_name.includes("someone")) // true