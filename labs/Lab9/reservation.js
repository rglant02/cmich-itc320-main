$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	   
	// Move focus to the Arrival date text box
	$('#arrival_date').focus();
 
	// Event handler for form submission
	$('#reservation_form').submit(function(event) {
		// Reset error messages
		$('.error').remove();
		
		// Validate Arrival date
		if ($('#arrival_date').val().trim() === '') {
			$('#arrival_date').after('<span class="error">Please enter an arrival date</span>');
			event.preventDefault();
		}
		
		// Validate Nights (must be numeric)
		var nightsValue = $('#nights').val().trim();
		if (nightsValue === '') {
			//Error message if no number is inputed 
			$('#nights').after('<span class="error">Please enter the number of nights</span>');
			event.preventDefault();
		} else if (isNaN(nightsValue)) {
			//Error message for nights input if something other than a number is inputed
			$('#nights').after('<span class="error">Must be a numeric value for nights!</span>');
			event.preventDefault();
		}
		
		// Validate Email address
		var emailValue = $('#email').val().trim();
		if (emailValue === '') {
			$('#email').after('<span class="error">Please enter an email address</span>');
			event.preventDefault();
		} else if (!emailPattern.test(emailValue)) {
			$('#email').after('<span class="error">Please enter a valid email address</span>');
			event.preventDefault();
		}

		// Validate Phone number
		var phoneValue = $('#phone').val().trim();
		if (phoneValue === '') {
			//Error if no phone number is inputed
			$('#phone').after('<span class="error">This field is required!</span>');
			event.preventDefault();
		} else if (!phonePattern.test(phoneValue)) {
			//Error if a invalid phone number is inputed 
			$('#phone').after('<span class="error">Please enter a valid phone number.</span>');
			event.preventDefault();
		}
	});
 });