window.addEventListener('load', () => {

    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");


    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        // variable if user is logged in, JSON to Text.
        var isLoggedIn = JSON.parse(this.responseText);
        if (isLoggedIn) {
            // If user gets logged in -> getElementByID(userLoggedIn)
            document.getElementById("userLoggedIn").style.setProperty('visibility', "visible");
            reloadNotes();
        } else {
            // If not, the user goes to Registration.
            document.getElementById("newUser").style.setProperty('visibility', "visible");
        }
    };
    // Logs completely in the profile.
    xhttp.open("GET", "getProfile");
    xhttp.send();

    // Variables for Login and Registration. (from html)
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");

    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");
    const logoutButton = document.getElementById("deleteSession");

    /*
     After Logout we want to see the first screen again, so we set the tag "userLoggedIn" to hidden
     and the tag "newUser" to visible.
     */
    logoutButton.addEventListener("click",() => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            document.getElementById("userLoggedIn").style.setProperty('visibility', "hidden");
            document.getElementById("newUser").style.setProperty('visibility', "visible");
        };
        xhttp.open("DELETE", "session");
        xhttp.send();
    });

    loginButton.addEventListener("click",() => {

        var email = emailInput.value;
        var password = passwordInput.value;

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            console.log(JSON.parse(this.responseText).status);
            var isLoggedIn = JSON.parse(this.responseText).status;
            if(isLoggedIn){
                // If Login is successful set "userLoggedIn" tag to visible and "newUser" tag to hidden.
                alert("Willkommen!");
                document.getElementById("userLoggedIn").style.setProperty('visibility', "visible");
                document.getElementById("newUser").style.setProperty('visibility', "hidden");
                reloadNotes();
                // After logging out email and password fields are empty.
                passwordInput.value = "";
                emailInput.value = "";
            }else{
                alert("Password oder Email ist falsch!");
                document.getElementById("userLoggedIn").style.setProperty('visibility', "hidden");
                document.getElementById("newUser").style.setProperty('visibility', "visible");
            }
        };
        // With POST method email and password are sent.
        xhttp.open("POST", "login");
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify({email,password}));
    });

    registerButton.addEventListener("click",() => {
        var email = emailInput.value;
        var password = passwordInput.value;

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            console.log(JSON.parse(this.responseText).status);
            var isLoggedIn = JSON.parse(this.responseText).status;
            if(isLoggedIn){
                alert("Willkommen auf unsere Platform!");
                document.getElementById("userLoggedIn").style.setProperty('visibility', "visible");
                document.getElementById("newUser").style.setProperty('visibility', "hidden");
                reloadNotes();
                passwordInput.value = "";
                emailInput.value = "";
            }else{
                alert("Email bereits vorhanden");
                document.getElementById("userLoggedIn").style.setProperty('visibility', "hidden");
                document.getElementById("newUser").style.setProperty('visibility', "visible");
            }
        };
        xhttp.open("POST", "register");
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify({email,password}));
    });

});