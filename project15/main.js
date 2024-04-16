var guestsName = ["Ahmad", "Nawab", "Saad", "Sajid"];
var DontCome = guestsName[1];
console.log(DontCome, "is not coming");
guestsName.splice(1, 2, "majid");
guestsName.forEach(function (guestsName) { return console.log("Salam ".concat(guestsName, ",please come for Lunch at my house")); });
