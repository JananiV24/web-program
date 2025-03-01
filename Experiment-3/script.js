document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to check validation
  
    
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('error-message');
  
    
    if (password !== confirmPassword) {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      alert('Registration successful!');
      // You can submit the form here or do something else (like saving data to a server)
      // For example: this.submit();
    }
  });

