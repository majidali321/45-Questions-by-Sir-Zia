var age = 22;
if (age < 2) {
    console.log("The person  is baby");
}
else if (age <= 2 && age > 4) {
    console.log("the person is toddler");
}
else if (age <= 4 && age > 13) {
    console.log("the person is kid");
}
else if (age <= 13 && age < 20) {
    console.log("you are teenger");
}
else if (age >= 20 && age < 65) {
    console.log("the person is adult");
}
else if (function (age) { return 65; }) {
    console.log("you are older");
}
