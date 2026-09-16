
// Login Function

function login() {

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    if (username == "Rj" && password == "12345") {

        alert("Login Successful!");

        window.location.href = "index.html";

    }

    else {

        alert("Invalid Username or Password");

    }

}


// Show Password

function showPassword() {

    let pass = document.getElementById("password");

    if (pass.type == "password") {

        pass.type = "text";

    }

    else {

        pass.type = "password";

    }

}