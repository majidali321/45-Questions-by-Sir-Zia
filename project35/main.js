var username = ['majid', 'ali', 'ahmad', 'admin', 'nawab'];
username = [];
// using foreach method
if (username.length === 0) {
    console.log("the list is empty we need to add some members");
}
else {
    username.forEach(function (username) {
        if (username === 'admin') {
            console.log("hello ".concat(username, " would you like to check the status"));
        }
        else {
            console.log("hello ".concat(username, " thank you for log in again"));
        }
    });
}
