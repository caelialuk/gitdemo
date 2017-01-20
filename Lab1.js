var loginInfo = {
    user: "",
    pass: ""
};

function getForm() {
    "use strict";
    var form = document.forms.login;

    function run() {
        var txtUsername = form.username;
        if (txtUsername.value === "") {
            txtUsername.focus();
            txtUsername.style.backgroundColor = "red";
            txtUsername.style.color = "white";
            return false;
        }

        var txtPassword = form.password;
        if (txtPassword.value === "") {
            txtPassword.focus();
            txtPassword.style.backgroundColor = "red";
            txtPassword.style.color = "white";
            return false;
        }

        var outputThis = document.getElementById("outputmsg");
        outputThis.style.display = "inherit";

        loginInfo.user = form.username.value;
        loginInfo.pass = form.password.value;

        var username = document.getElementById("outputUser");
        username.innerHTML = loginInfo.user;

        var password = document.getElementById("outputPass");
        password.innerHTML = loginInfo.pass;

        return false;
    }

    form.onsubmit = run;
}

window.onload = getForm;