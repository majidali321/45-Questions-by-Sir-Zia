// making function for sandwich
function Make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('\nmaking a sandwich with following items\n');
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log('\nnow enjoy the Sandwich');
}
Make_Sandwich("butter", 'egg', 'cheese', 'chicken', 'mayo');
Make_Sandwich('cheese', 'butter');
