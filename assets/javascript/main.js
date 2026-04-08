document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
            const message = document.createElement('p');
            message.textContact = "Thank you. This is a demo contact form.";
            message.style.color = 'green';
            form.appendChild(message);
            form.requestFullscreen();
    })
})