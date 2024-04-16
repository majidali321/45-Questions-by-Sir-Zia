let Name = "Albert  einstein once said, \"A person who never made a mistake never tried anything new\""
 
console.log("Albert  einstein once said, \"A person who never made a mistake never tried anything new\" ")

console.log(Name.replace(/\b\w/g, (char)=> char.toUpperCase()));