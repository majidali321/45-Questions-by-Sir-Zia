// makig function
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
;
var magician_name = ["harry", 'potter', 'jack', 'avatar'];
show_magician(magician_name);
