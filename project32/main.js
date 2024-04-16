// Arrayfor current user
var current_user = ["Majid", "Ahmad", "Nawab", "Sajid", "Wajid"];
// Array for new user
var new_user = ["Sami", "Hamza", "Majid", "altaf", "Ahmad"];
// // Loop for check availibility
// new_user.forEach(new_user =>{
//     let our_condition = current_user.some(current_user =>current_user.toLowerCase() === new_user.toLowerCase())
//     if (our_condition){
//         console.log(`this user ${new_user} is already taken`)
//     }else {
//         console.log(`this usename ${new_user} is available`)
//     }
// })
current_user.some(function (current_user) { return console.log("this username ".concat(new_user, " is not avalable")); });
