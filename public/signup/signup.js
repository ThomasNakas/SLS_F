$(document).ready(function () {
    $("#eye-icon").click(function () {
        togglePasswordVisibility(); // call the togglePasswordVisibility function
    });

    $("#signup-password").on("input", function () {
        const passwordStrength = $("#password-strength");
        const password = $(this).val();

        const uppercaseRegex = /^(?=.*[A-Z])/;
        const lowercaseRegex = /^(?=.*[a-z])/;
        const symbolRegex = /^(?=.*[@$!%*?&])/;
        const lengthRegex = /^.{8,}$/;

        const isUppercase = uppercaseRegex.test(password);
        const isLowercase = lowercaseRegex.test(password);
        const hasSymbol = symbolRegex.test(password);
        const isLengthValid = lengthRegex.test(password);

        if (isUppercase && isLowercase && hasSymbol && isLengthValid) {
            passwordStrength.css("color", "green");
            passwordStrength.text("Password strength: Strong");
        } else {
            passwordStrength.css("color", "red");
            passwordStrength.text("Password strength: Weak");
        }
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
