//a variable called getIserRepos that holds a function
var getUserRepos = function() {
    //console.log("function was called");
    fetch("https://api.github.com/users/octocat/repos").then(function(response) {
       //console.log("inside", response); 
       response.json().then(function(data) {
           console.log(data);
        });
    //console.log("outside");
    });

};

getUserRepos();