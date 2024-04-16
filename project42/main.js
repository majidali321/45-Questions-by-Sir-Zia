function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
var magician = ['harry', 'potter', 'bangali baba'];
var great_magician = make_great(magician);
show_magician(great_magician);
