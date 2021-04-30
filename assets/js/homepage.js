var repoContainerEl = document.querySelector("#repos-container");
var reposSearchTerm = document.querySelector("#repo-search-term");

//a variable called getIserRepos that holds a function
var getUserRepos = function(user) {
    //format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
            //console.log(response);
            if (response.ok) {
                response.json().then(function(data) {
                    //console.log(data);
                    displayRepos(data, user);
                });
            } else {
                alert("Error:" + response.statusText);
            }
        })

        .catch(function(error) {
            //Notice this `.catch()` getting chained onto the end of the `.then()` method
            alert("Unable to connect ot GitHub");
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

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function(event) {
    event.preventDefault();
    //console.log(event);
    //get value from input element
    var username = nameInputEl.value.trim();

    if (username){
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
};

var displayRepos = function(repos, searchTerm) {
    //check if api returned any repos
    if (repos.length === 0) {
        repoContainerEl.textContent = "No repositories found.";
    }

    // clear old content
    repoContainerEl.textContent = "";
    reposSearchTerm.textContent = searchTerm;
    
    // loop over repos
    for (var i = 0; i < repos.length; i++) {
        //format repo name
        var repoName = repos[i].owner.login + "/" + repos[i].name;

        //create a container for each repo
        var repoEl = document.createElement("div");
        repoEl.classList = "list-item flex-row justify-space-between align-center";

        //create a span element to hold repository name
        var titleEl = document.createElement("span");
        titleEl.textContent = repoName;

        //append to container
        repoEl.appendChild(titleEl);

        //create a status element
        var statusEl = document.createElement("span");
        statusEl.classList = "flex-row alighn-center";

        //check if current repo has issues or note
        if (repos[i].open_issues_count > 0) {
            statusEl.innerHTML = 
                "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
        } else {
            statusEl.innerHTML = 
                "<i class='fas fa-check-square status-con icon-success'></i>";
        }

        //append to container
        repoEl.appendChild(statusEl);

        // append container to the dom
        repoContainerEl.appendChild(repoEl);
    }
    
    // console.log(repos);
    // console.log(searchTerm);
};

userFormEl.addEventListener("submit", formSubmitHandler);
//getUserRepos("lernantino");