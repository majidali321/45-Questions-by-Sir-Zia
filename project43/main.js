function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_magician(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); }); // Return command is used for save the function.isko call ni kr skty
}
var magician = ['harry', 'potter', 'baba bangali', 'bangali baji'];
// making copy of magician list .slice use to make copy
var Copy_magician_name = magician.slice();
// modify the copy of Array 
var copy_great_magician = make_magician(Copy_magician_name);
// show the Original Array
show_magician(magician);
// show the copy of Array
show_magician(copy_great_magician);
