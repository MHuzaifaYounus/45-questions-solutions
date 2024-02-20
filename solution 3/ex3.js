// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.\
var person = ("huzaifa");
// In lowercase
console.log("In lowercase : ".concat(person.toLowerCase()));
// In Uppercase
console.log("In Uppercase : ".concat(person.toUpperCase()));
// In Titlecase
console.log("In TitleCase : ".concat(person[0].toUpperCase() + person.substring(1)));
