function validateForm() {
            var nameInput = document.getElementById("name");
            var emailInput = document.getElementById("email");
            var mobileInput = document.getElementById("mobile");

            var namePattern = /^[A-Za-z]+$/;
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            var mobilePattern = /^[0-9]+$/;

            if (!namePattern.test(nameInput.value)) {
                alert("Name should only contain alphabets.");
                return;
            }

            if (!emailPattern.test(emailInput.value)) {
                alert("Invalid email format.");
                return;
            }

            if (!mobilePattern.test(mobileInput.value)) {
                alert("Mobile number should only contain numbers.");
                return;
            }

            alert("Form submitted successfully!");
            // You can add further actions here, like submitting the form to a server.
}

