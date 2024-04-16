let Aliencolor :string= "Black";
if (Aliencolor === "Black"){
    console.log("you have just earned 5 points")  // First version
} else if( Aliencolor === "Yellow") {
    console.log("you have earned 10 points") 
}else if (Aliencolor === "red"){
    console.log("you have earned 15 points") 
}

//second version
let aliencolor2 = "yellow"
if (aliencolor2 === "green"){
    console.log("You have earned 5 points")
}else if (aliencolor2==="yellow"){
    console.log("you have earned 10 points")
}else if (aliencolor2=== "black"){
    console.log("you have earned 20 points")
}

//Version 3
let aliencolor3 = "red";
if (aliencolor3 === "black"){
    console.log("you have earned 5 points")
}else if (aliencolor3 === "red"){
    console.log("you have earned 15 points")
}
