// variable creating
let guest = ["Ahmad","sami","Altaf","tariq"]
// variable for notify of the missing person
let DontCome= guest[1]
console.log(DontCome,"can`t come")
// // Foreeach command
// guest.forEach(guest=> console.log(`Salam ${guest} join the dinner`))

// removing the person and  replace with anotherone
guest.splice(1,2,"kaka");
// guest.forEach(guest=>console.log(`Salam ${guest} please come for dinner`))
console.log("Good to announce that we have bigger table for dinner")

// removing first one in Array

guest.unshift("Hamza")

// removing last value in Array
guest.push("SamiUllah")

// removing middle value from Array by using logic
let MiddleNumber :number = Math.floor(guest.length/2)
// Add middle value in the Array by using Splice
guest.splice(MiddleNumber,0,"AmjAd")
guest.forEach(guest=> console.log(`Salam ${guest} join the dinner`))


console.log("unfortunately New table wont arrive so i can invite only two guests")

// remove two guest using While loop
// POP function used while we need to remove last one value in the Array
while(guest.length>2){
    let removedGuest = guest.pop()
    console.log(`Salam ${guest} sorry you are not invited`)
}

// Inviting rest guests
guest.forEach(guest =>console.log(` luckily ${guest} you are remained guests`))

// removing last two guests in the list
guest.pop()
guest.pop()

console.log("empty list:", guest)