document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Using optional chaining for error elements
    document.getElementById('emailError')?.classList.add('hidden');
    document.getElementById('passwordError')?.classList.add('hidden');

    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;

    // Validation flags
    let isValid = true;

    // Email validation
    if (!email || !email.includes('@')) {
      document.getElementById('emailError')?.classList.remove('hidden');
      isValid = false;
    }

    // Password validation
    if (!password || password.length < 6) {
      document.getElementById('passwordError')?.classList.remove('hidden');
      isValid = false;
    }

    // If form is valid, proceed with submission or other logic
    if (isValid) {
      // For example, submit the form or perform other actions
      alert('Successfully Login'); // Remove this line in production
    }
});
