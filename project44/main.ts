// making function for sandwich
function Make_Sandwich(...items:string[]){
    console.log('\nmaking a sandwich with following items\n')
    items.forEach(singleItem => console.log(singleItem))
    console.log('\nnow enjoy the Sandwich')
}
Make_Sandwich("butter",'egg','cheese','chicken','mayo')

Make_Sandwich('cheese','butter')