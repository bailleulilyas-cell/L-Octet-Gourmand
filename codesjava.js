// On attend que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('datePicker');
    
    // 1. Calcul de la date d'aujourd'hui (Minimum)
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Janvier est 0
    const yyyy = today.getFullYear();
    const minDate = yyyy + '-' + mm + '-' + dd;

    // 2. Calcul de la date dans 3 mois (Maximum)
    const maxDateObj = new Date();
    maxDateObj.setMonth(maxDateObj.getMonth() + 3);
    const ddMax = String(maxDateObj.getDate()).padStart(2, '0');
    const mmMax = String(maxDateObj.getMonth() + 1).padStart(2, '0');
    const yyyyMax = maxDateObj.getFullYear();
    const maxDate = yyyyMax + '-' + mmMax + '-' + ddMax;

    // 3. Application des limites au calendrier
    dateInput.setAttribute('min', minDate);
    dateInput.setAttribute('max', maxDate);

    // Petit bonus : met la date d'aujourd'hui par défaut
    dateInput.value = minDate;
});
