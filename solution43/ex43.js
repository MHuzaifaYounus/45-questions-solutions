// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians_name = ["Shahrukh Zahoor", "Tomas De La Cruz", "Derren Brown", "Lance Burton"];
function show_magicians() {
    for (var index = 0; index < magicians_name.length; index++) {
        console.log(magicians_name[index]);
    }
}
function make_great() {
    var copyofmagicians_name = Array.from(magicians_name);
    for (var index = 0; index < magicians_name.length; index++) {
        copyofmagicians_name[index] = "The Great ".concat(copyofmagicians_name[index]);
    }
    return copyofmagicians_name;
}
var newarray = make_great();
show_magicians();
console.log(newarray);
