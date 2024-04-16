let guestsName = ["Ahmad","Nawab","Saad","Sajid"]
let DontCome = guestsName[1];

console.log(DontCome , "is not coming")

guestsName.splice(1,2,"majid")
guestsName.forEach(guestsName=> console.log(`Salam ${guestsName},please come for Lunch at my house`))