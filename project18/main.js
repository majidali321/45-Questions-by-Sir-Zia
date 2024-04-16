var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countries = ["Saudia", "Iran", "Pakistan", "Zembia", "turkey", "America"];
// original Order
console.log("Original Order", countries);
// Sorting
console.log("Sorting", __spreadArray([], countries, true).sort());
// again in original array
console.log("Again origional order", countries);
// reverse order
// we must make aa copy of the origional list 
console.log("Reverse oerder", __spreadArray([], countries, true).reverse());
// again in oeriginal order 
console.log("Again origianal order", countries);
// reverse order
console.log("Reverse order", countries.reverse());
// original order
console.log("original order", countries);
// Sorting
console.log("sorting in Alphabetical order", countries.sort());
// rreverse order
console.log("Reverse order", countries.reverse());
