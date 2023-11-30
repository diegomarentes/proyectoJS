document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('formularioContacto');
    contactForm.addEventListener('submit', function(e) {
        if (!validateContactForm()) {
            e.preventDefault();
        }
    });
});

function validateContactForm() {
    const nameInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        alert('Por favor, completa todos los campos del formulario.');
        return false;
    }

    return true;
}
