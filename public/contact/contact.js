import users from "../../data.json";

$("#myForm").on("submit", function (event) {
    event.preventDefault();

    const emailInput = $("#recipient");
    const emailError = $("#emailError");
    const submitButton = $("#sButton");
    const recipient = emailInput.val();

    try {
        const { name } = users.find((user) => user.email === recipient) || {};

        submitButton.prop("disabled", false);
    } catch (error) {
        emailError.text("Invalid email address. Please check your input.");

        // Disable the submit button
        submitButton.prop("disabled", true);
    }
});
