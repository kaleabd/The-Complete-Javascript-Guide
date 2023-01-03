// Coding Challenge 3
// Tipping system

//Rules
// Tip: 15% if the bill value is between 50 & 300
// Tip: 20% if the bill has different values

//Solutions
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}
const bills = [289, 560, 44, 670]
bills.forEach(bills => console.log(calcTip(bills)))