//a variable called getIserRepos that holds a function
var getUserRepos = function() {
    //console.log("function was called");
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();