function car_models(manufacturer, Model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        Model: Model
    };
    // add additional options for Car
    options.forEach(function (oneOption) {
        var _a = oneOption.split(":"), Key = _a[0], Value = _a[1];
        car[Key.trim()] = Value.trim();
    });
    return car;
}
var my_car = car_models("Toyota", "Corolla", "COlour:Black", "Model:2020");
console.log(my_car);
