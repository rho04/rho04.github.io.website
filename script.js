document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for reaching out! We'll get back to you shortly.");
        this.reset(); // Reset form after submission
    } else {
        alert("Please fill out all fields.");
    }
});
