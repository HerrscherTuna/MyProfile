// Handle form validation and display message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("formResponse");

  if (!name || !email || !message) {
    response.textContent = "Please fill out all fields.";
    response.style.color = "red";
  } else {
    response.textContent = `Thank you, ${name}! I'll get back to you soon.`;
    response.style.color = "#ff69b4";
    document.getElementById("contactForm").reset();
  }
});
