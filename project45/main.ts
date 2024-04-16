function car_models(manufacturer,Model,...options){
    let car={
        manufacturer:manufacturer,
        Model:Model
    }
    // add additional options for Car
    options.forEach(oneOption=>{
        let[Key,Value]= oneOption.split(":")
        car[Key.trim()]=Value.trim()
    })
    return car;
}
let my_car= car_models("Toyota","Corolla","COlour:Black","Model:2020")

console.log(my_car)