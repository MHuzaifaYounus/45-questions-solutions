// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let list = ["AK","Usman","Hamza","Irtiza","Areeb","Adil","Ayan"]

list[7] = "Hammad"

for (let key = 0; key < list.length; key++) {
    console.log(`"Hey ${list[key]}, join us for dinner at my place this Saturday!"`);
    
}