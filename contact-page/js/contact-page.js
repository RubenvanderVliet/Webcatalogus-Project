// Selecteer de formulier-elementen
const submitBtn = document.querySelector('.submit-btn');
const inputName = document.querySelector('.input-box-name');
const inputEmail = document.querySelector('.input-box-email');
const inputFeedback = document.querySelector('.input-box-feedback');

// Voeg een event listener toe aan de submit-knop
submitBtn.addEventListener('click', function (event) {
    // Voorkom dat het formulier standaard wordt verzonden
    event.preventDefault();

    // Valideer de invoervelden
    if (validateForm()) {
        // Als het formulier is gevalideerd, toon succesbericht
        alert('Formulier succesvol verstuurd!');
        inputName.value = '';
        inputEmail.value = '';
        inputFeedback.value = '';
        inputName.classList.remove('error')
        inputEmail.classList.remove('error')
        inputFeedback.classList.remove('error')
    }
});

// Functie om het formulier te valideren
function validateForm() {
    // Controleer of de invoervelden niet leeg zijn
    if (inputName.value.trim() === '' || inputEmail.value.trim() === '' || inputFeedback.value.trim() === '') {
        alert('Vul alle verplichte velden in.');
        inputName.classList.add('error')
        inputEmail.classList.add('error')
        inputFeedback.classList.add('error')
        return false;
    }
    // Als alles is gevalideerd, retourneer true
    return true;
}