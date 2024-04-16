function show_magician(magician:string[]){
    magician.forEach(name => console.log(name))
}

function make_magician(magician:string[]){
    return magician.map(name => `The Great ${name}`) // Return command is used for save the function.isko call ni kr skty
}

let magician = ['harry','potter','baba bangali','bangali baji']


// making copy of magician list .slice use to make copy
let Copy_magician_name = magician.slice()

// modify the copy of Array 
let copy_great_magician = make_magician(Copy_magician_name)

// show the Original Array
show_magician(magician)

// show the copy of Array
show_magician(copy_great_magician)
