let guest = ['Ahmad',"Nawab","kaka",'sajid',"Abid"]
let dontCome = guest[2]

console.log(dontCome, 'is not coming')

guest.splice(2,3,"Wajid")

// guest.forEach(guest=>console.log(`${guest} please must come`))

// Adding a new value at stating of the indexe
guest.unshift("Sadiq")

// Addin a new value at ending of index
guest.push("Akbar")

// Adding a new value in the middle of Array or index
