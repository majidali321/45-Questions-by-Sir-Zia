var MyName = "Majid ali gohar";
console.log(MyName.toLowerCase());
console.log(MyName.toUpperCase());
console.log(MyName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
