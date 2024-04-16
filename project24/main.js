var fruits = ["Orange", "mangoe", "banana", "amrood"];
var football = "Football";
var Uppercaseletter = "FOOTBALL";
var ten = 10;
var twenty = 20;
// equality 
console.log("\nFootball is equal to Football");
console.log(football == "Football");
// inequality
console.log('\nFootBall is not equal to football');
console.log(football != "Football");
// upper case to lowercase
console.log("\nupper case to lower case");
console.log(Uppercaseletter.toLowerCase() == "football");
// is not equal to football
console.log("\nIs football is not equal to football");
console.log(Uppercaseletter.toLowerCase() != "football");
// numerical value
console.log('\n ten equal to twenty');
console.log(ten == twenty);
// numerical value inequality
console.log('\nis ten is not equal to twenty');
console.log(ten != twenty);
console.log("\n is ten is greater than 0");
console.log(ten > 0);
console.log("\n is ten >20");
console.log(ten > 20);
console.log('\nis 10 is greater than or equal to 5');
console.log(ten >= 5);
console.log('\n is ten is <=7');
console.log(twenty <= 10);
console.log('\nis twenty is not equal to ten');
console.log(twenty != ten);
// tests using "and"& "or"
console.log("\n twenty is not equal to ten & ten is less than twenty");
console.log(twenty != 10 && ten < 20); //true answer
console.log(" \n ten  is equal to twenty && twenty is less than ten");
console.log(ten != twenty && ten > twenty); // && ka operator jaha lg  jaye to 1% bhi value false hui to baqi 99% ko bhi false krdy ga
console.log("ten is equal to twenty || ten is less than twenty");
console.log(ten == 20 || ten < 20); // true
//  because in "OR ||" operator if 1% value will true then rest 99% false values would be true fy this operator
// include functions
console.log("\n is Amrood fruit included in Array ? ");
console.log(fruits.includes("amrood"));
// // not include in Array
console.log('\n amrood is not include in array');
console.log(!fruits.includes);
