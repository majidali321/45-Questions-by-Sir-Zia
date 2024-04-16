function show_magician(magician:string[]){
    magician.forEach(name => console.log(name))
}
function make_great(magician:string[]){
    return magician.map(name => `The great ${name}`)
}

let magician = ['harry','potter','bangali baba']

let great_magician = make_great(magician)

show_magician(great_magician)