// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return ("".concat(city, " , ").concat(country));
}
var message1 = city_country("Karachi", "Pakistan");
console.log(message1);
var message2 = city_country("Tokyo", "Japan");
console.log(message2);
var message3 = city_country("Paris", "France");
console.log(message3);
