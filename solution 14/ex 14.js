// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var list = ["AK", "Usman", "Hamza", "Irtiza", "Areeb", "Adil", "Ayan"];
for (var key = 0; key < list.length; key++) {
    console.log("\"Hey ".concat(list[key], ", join us for dinner at my place this Saturday!\""));
}
