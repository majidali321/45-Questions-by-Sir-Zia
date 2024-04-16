// function describe_city(city:string , country:string = "pakistan"){
//     console.log(`${city} is in ${country}`)
// }
// describe_city("pindi")
// describe_city("karachi","sindh")
// describe_city("berlin","germany")
// describe_city("Jeddah","Saudia ")
function cities_countries(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
cities_countries("lahore");
