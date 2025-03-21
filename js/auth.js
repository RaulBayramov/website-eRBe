document.addEventListener("DOMContentLoaded", () => {
  // Password visibility toggle
  const passwordToggles = document.querySelectorAll(".password-toggle");
  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = toggle.previousElementSibling;
      const icon = toggle.querySelector("i");

      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });
  });

  // Password strength meter
  const passwordInput = document.getElementById("password");
  const strengthMeter = document.querySelector(".strength-meter-fill");
  const strengthText = document.querySelector(".strength-text");

  if (passwordInput && strengthMeter && strengthText) {
    passwordInput.addEventListener("input", () => {
      const strength = checkPasswordStrength(passwordInput.value);
      strengthMeter.setAttribute("data-strength", strength.score);
      strengthText.textContent = strength.label;
    });
  }

  // Form submission
  const signupForm = document.getElementById("signup-form");
  const signinForm = document.getElementById("signin-form");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Sign up form submitted");
      // Add your sign up logic here
    });
  }

  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Sign in form submitted");
      // Add your sign in logic here
    });
  }

  // Social authentication
  const socialButtons = document.querySelectorAll(".social-btn");
  socialButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const provider = button.classList.contains("google-btn")
        ? "Google"
        : "Facebook";
      console.log(`Sign in with ${provider}`);
      // Add your social authentication logic here
    });
  });
});

// Password strength checker
function checkPasswordStrength(password) {
  let score = 0;
  const checks = {
    length: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasLower: /[a-z]/.test(password),
    hasUpper: /[A-Z]/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  // Calculate score
  score += checks.length ? 1 : 0;
  score += checks.hasNumber && (checks.hasLower || checks.hasUpper) ? 1 : 0;
  score += checks.hasLower && checks.hasUpper ? 1 : 0;
  score += checks.hasSpecial ? 1 : 0;

  // Return score and label
  const labels = ["Too Weak", "Weak", "Fair", "Good", "Strong"];
  return {
    score,
    label: labels[score],
  };
}
