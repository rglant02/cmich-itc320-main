$(document).ready(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const generateButton = $("#generate");
    const clearButton = $("#clear");
    const passwordInput = $("#password");
    const numInput = $("#num");

    generateButton.on("click", () => {
        passwordInput.val("");
        const length = parseInt(numInput.val());

        if (isNaN(length)) {
            alert("Please enter a valid number");
        } else {
            let password = "";
            for (let i = 0; i < length; i++) {
                const start = getRandomNumber(chars.length);
                const stop = start + 1;
                const pwdchar = chars.substring(start, stop);
                password += pwdchar;
            }
            passwordInput.val(password);
        }
    });

    clearButton.on("click", () => {
        numInput.val("");
        passwordInput.val("");
        numInput.focus();
    });
});

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}