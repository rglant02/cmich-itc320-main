$(document).ready(function () {
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    // Set focus on the first text box
    $("#arrival_date").focus();

    // Event handler for the form's submit button click
    $("#reservation_form").submit(
        function(event) {
            var isValid = true;

            // Validate the requested arrival date
            var arrivalDate = $("#arrival_date").val().trim();
            if (arrivalDate == "") {
                $("#arrival_date").next().text("This field is required.");
                isValid = false;
            } else {
                $("#arrival_date").next().text("");    
            }
            $("#arrival_date").val(arrivalDate);

            // Validate the number of nights
            var nights = $("#nights").val().trim();
            if (nights == "") {
                $("#nights").next().text("This field is required.");
                isValid = false;
            } else if (isNaN($("#nights").val())) {
                $("#nights").next().text("This field must be numeric.");
                isValid = false;
            } else {
                $("#nights").next().text("");
            }
            $("#nights").val(nights);  

            // Validate the name entry
            var name = $("#name").val().trim();
            if (name == "") {
                $("#name").next().text("This field is required.");
                isValid = false;
            }
            else {
                $("#name").val(name);
                $("#name").next().text("");
            }
            $("#name").val(name);

            // Validate the email entry with a regular expression
            var email = $("#email").val();
            if (email == "") {
                $("#email").next().text("This field is required.");
                isValid = false;
            } else if ( !emailPattern.test(email) ) {
                $("#email").next().text("Must be a valid email address.");
                isValid = false;
            } else {
                $("#email").next().text("");
            }
            $("#email").val(email);

            // Validate the phone number
            var phone = $("#phone").val().trim();
            if (phone == "") {
                $("#phone").next().text("This field is required.");
                isValid = false;
            } else {
                $("#phone").next().text("");
            }
            $("#phone").val(phone);

            // Prevent the submission of the form if any entries are invalid
            if (isValid == false) {
                event.preventDefault();    
            }
        }
    );
});