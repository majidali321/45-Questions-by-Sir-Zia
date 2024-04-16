var username = ['majid', 'ali', 'ahmad', 'admin', 'nawab'];
// using foreach method
username.forEach(function (username) {
    if (username === 'admin') {
        console.log("hello ".concat(username, " would you like to check the status"));
    }
    else {
        console.log("hello ".concat(username, " thank you for log in again"));
    }
});
