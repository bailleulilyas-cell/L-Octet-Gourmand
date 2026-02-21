document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('datePicker');
    
    // Calcul date min (aujourd'hui)
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];

    // Calcul date max (dans 3 mois)
    const maxDateObj = new Date();
    maxDateObj.setMonth(maxDateObj.getMonth() + 3);
    const maxDate = maxDateObj.toISOString().split('T')[0];

    dateInput.setAttribute('min', minDate);
    dateInput.setAttribute('max', maxDate);
    dateInput.value = minDate;
});
    // Petit bonus : met la date d'aujourd'hui par défaut
    dateInput.value = minDate;
});

