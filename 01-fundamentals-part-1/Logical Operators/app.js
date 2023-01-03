let hasDriverLicense = true;
let hasGoodVision = true;

// AND operator
if (hasDriverLicense && hasGoodVision) console.log("passed!");

let hasMoney = false;
let hasInvitationTicket = true;

// OR operator
if (hasMoney || hasInvitationTicket) console.log("You can enter the room!")

// NOT operator
console.log(!hasMoney) // changes the value to "true"

/*
The Switch statement
- it's an alternative way to write complicated if else statements.
- Compare one value to multiple options
*/