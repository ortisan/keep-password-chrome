$(function () {
    var inputEmail = $("#email");
    var inputPassword = $("#pass");

    if (inputEmail) {
        inputEmail.on("blur", function () {
            localStorage.setItem("email", $(this).val())
        })
    }

    if (inputPassword) {
        inputPassword.attr("type", "text");
        inputPassword.on("blur", function () {
            localStorage.setItem("pass", $(this).val())
        })
    }
});