// Coding challenge 3
// @KaleabDereje

const dolphins = (99 + 100 + 110) / 3
const koalas = (88 + 91 + 110) / 3

console.log(`Dolphins: ${dolphins} \nKoalas: ${koalas}`)

if (dolphins > koalas && dolphins >= 100) {
    console.log(`Dolphins win the trophy with ${dolphins} Point!`)
} else if (koalas > dolphins && koalas >= 100) {
    console.log(`Koalas win the trophy with ${koalas} Point!`)
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
    console.log(`Both Dolphins and Koalas Win th trophy with ${koalas} point.`)
} else {
    console.log(`No one Wins the Trophy!\nIt seems the values are below 100. \nIt's ${dolphins}.`)
}