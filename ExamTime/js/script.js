function toggleMenu() {
    // Here you can add code to open or close your menu
    // For example, toggling a class to show/hide a sidebar or dropdown
    alert("Menu toggled!");
}
// script.js
document.getElementById("menuBtn").addEventListener("click", function() {
    const menuList = document.getElementById("menuList");
    // Toggle the display of the menu
    if (menuList.style.display === "block") {
        menuList.style.display = "none"; // Hide the menu
    } else {
        menuList.style.display = "block"; // Show the menu
    }
});


function loadPDF(pdfName) {
    const iframe = document.getElementById('pdf-viewer');
    iframe.src = pdfName;
}

// Select the toggle checkbox and body element
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check local storage for saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

// Toggle dark mode on switch change
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});


function showLoginForm() {
  console.log("Login form is being displayed");
  document.getElementById("loginForm").style.display = "flex";
  document.getElementById("signupForm").style.display = "none";
}

function showSignupForm() {
  console.log("Signup form is being displayed");
  document.getElementById("signupForm").style.display = "flex";
  document.getElementById("loginForm").style.display = "none";
}


function forgotPassword() {
  // // You can display a reset password form, or redirect the user to a new page
  // const email = prompt("Please enter your email address to reset your password:");

  if (email) {
      // Make a backend request to send reset email (this part is a placeholder)
      alert("Password reset link has been sent to your email.");
      
      // Optionally, redirect to a reset password page
      // window.location.href = '/reset-password'; // Uncomment to redirect
  }
}


document.getElementById('resetForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  
  // Send email data to backend using fetch API (this is just a placeholder)
  fetch('/forgot-password', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
      if (data.message) {
          document.getElementById('message').textContent = data.message; // Show success message
      } else {
          document.getElementById('message').textContent = 'Error: Please try again.'; // Show error message
      }
  })
  .catch(error => {
      document.getElementById('message').textContent = 'Error sending the reset link. Please try again.';
      console.error('Error:', error);
  });
});
