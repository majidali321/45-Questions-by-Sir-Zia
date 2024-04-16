let username = ['majid','ali','ahmad','admin','nawab']
// remove all values from Arrays
username=[]

// condition for 0 values
if (username.length===0){
    console.log("the list is empty we need to add some members")
}else{
    username.forEach(username=>{
    if(username ==='admin'){
        console.log(`hello ${username} would you like to check the status`)
     } else{
            console.log(`hello ${username} thank you for log in again`)
        }
    })
}
