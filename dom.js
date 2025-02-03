document
  .getElementById("registrationForm")
  .addEventListener("input", function () {
    validateForm();
  });

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    if (validateForm()) {
      document.getElementById("successMessage").textContent =
        "Registration successful!";
      document.getElementById("registrationForm").reset(); // Reset the form
      setTimeout(() => {
        document.getElementById("successMessage").textContent = ""; // Clear success message after a delay
      }, 3000); // Adjust the delay as needed
    }
  });

function validateForm() {
  let isValid = true;

  // Username validation
  let username = document.getElementById("username").value;
  let usernameError = document.getElementById("usernameError");
  if (username === "") {
    usernameError.textContent = "Username is required.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Password validation
  let password = document.getElementById("password").value;
  let passwordError = document.getElementById("passwordError");
  if (password === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm password validation
  let confirmPassword = document.getElementById("confirm-password").value;
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm Password is required.";
    isValid = false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  // Enable or disable the register button based on form validity
  let registerBtn = document.getElementById("registerBtn");
  if (isValid) {
    registerBtn.disabled = false;
    registerBtn.classList.remove("disabled");
  } else {
    registerBtn.disabled = true;
    registerBtn.classList.add("disabled");
  }

  return isValid;
}
