document.getElementById('formResa').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des données
    let nom = document.getElementById('nom').value;
    let nb = document.getElementById('personnes').value;
    let date = document.getElementById('date').value;

    // Affichage d'un message de succès
    let confirmation = document.getElementById('messageConfirmation');
    confirmation.innerHTML = `<p style="color: green; font-weight: bold;">
        Merci ${nom} ! Votre table pour ${nb} personnes le ${date} est bien enregistrée.
    </p>`;

    // Réinitialisation du formulaire
    this.reset();
});