const fullname = "Kaleab Dereje"
const job = "Developer & Digital artist"
const birthyear = 2002
const year = new Date()
const date = year.getFullYear()

const kaleab = "I'm " + fullname + ", a " + (date - birthyear) + " years old, " + job + " !"

console.log(kaleab)