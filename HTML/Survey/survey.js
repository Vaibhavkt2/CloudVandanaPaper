function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    if (firstName === "" || lastName === "" || dob === "" || country === "" || genderInputs.length === 0 || profession === "" || email === "" || mobile === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    return true;
}

function showPopup() {
    if (validateForm()) {
        var confirmation = document.getElementById('confirmation');
        var form = document.getElementById('surveyForm');
        var message = "Selected Values:\n\n";

        message += "First Name: " + document.getElementById('firstName').value + "\n";
        message += "Last Name: " + document.getElementById('lastName').value + "\n";
        message += "Date of Birth: " + document.getElementById('dob').value + "\n";
        message += "Country: " + document.getElementById('country').value + "\n";
        message += "Gender: " + document.querySelector('input[name="gender"]:checked').value + "\n";
        message += "Profession: " + document.getElementById('profession').value + "\n";
        message += "Email: " + document.getElementById('email').value + "\n";
        message += "Mobile Number: " + document.getElementById('mobile').value + "\n";

        confirmation.textContent = message;
        confirmation.style.display = 'block';
        form.reset();
    }
}
