//a variable called getIserRepos that holds a function
var getUserRepos = function(user) {
    //format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
    //console.log("function was called");
    // fetch("https://api.github.com/users/octocat/repos").then(function(response) {
    //    //console.log("inside", response); 
    //    response.json().then(function(data) {
    //        console.log(data);
    //     });
    //console.log("outside");
    // });

};

getUserRepos();