document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for your message! We'll get back to you shortly.");
  this.reset();
});
