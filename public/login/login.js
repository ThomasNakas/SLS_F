$(document).ready(function () {
    $("#eye-icon").click(function () {
        togglePasswordVisibility(); // call the togglePasswordVisibility function
    });
});

function togglePasswordVisibility() {
    const passwordInput = $("#signup-password");
    const eyeIcon = $("#eye-icon");

    if (passwordInput.attr("type") === "password") {
        passwordInput.attr("type", "text");
        eyeIcon.removeClass("far fa-eye").addClass("fas fa-eye-slash");
    } else {
        passwordInput.attr("type", "password");
        eyeIcon.removeClass("fas fa-eye-slash").addClass("far fa-eye");
    }
}
