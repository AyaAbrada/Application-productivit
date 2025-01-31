        // Fonction pour afficher les tâches stockées dans localStorage
        function AfficherTache() {
            // Charger les tâches depuis localStorage
            const taches = JSON.parse(localStorage.getItem("taches")) || [];
        
            // Sélectionner l'élément du DOM où les tâches seront affichées
            const tachesContainer = document.getElementById("tachesContainer");
        
            // Vider le conteneur avant d'afficher les tâches (au cas où il y aurait déjà des tâches affichées)
            tachesContainer.innerHTML = '';
        
            // Vérifier s'il y a des tâches et les afficher
            if (taches.length > 0) {
                taches.forEach((tache,index )=> {
                    // Créer un élément HTML pour chaque tâche
                    const tacheDiv = document.createElement('div');
                    tacheDiv.classList.add('tache'); // Ajouter une classe CSS pour styler les tâches (facultatif)
        
                    // Créer le contenu de la tâche (titre et priorité)
                    const titre = document.createElement('h3');
                    titre.textContent = tache.titre;
        
                    const propriete = document.createElement('p');
                    propriete.textContent = `Priorité: ${tache.propriete}`;
                    tacheDiv.innerHTML = `
                     <button onclick="deletTask(${index})" class="btn btn-succes">delete</button>
                    `;

                    // Ajouter le titre et la priorité à l'élément de la tâche
                    tacheDiv.appendChild(titre);
                    tacheDiv.appendChild(propriete);
                    
        
                    // Ajouter la tâche au conteneur des tâches
                    tachesContainer.appendChild(tacheDiv);
                });
            } else {
                // Si aucune tâche n'est trouvée, afficher un message
                const message = document.createElement('p');
                message.textContent = "Aucune tâche à afficher.";
                tachesContainer.appendChild(message);
            }
        }

        
        // Appeler la fonction pour afficher les tâches dès que la page est chargée
        window.onload = AfficherTache;

        //function delete
function deletTask(index) {
    let taskList = localStorage.getItem("taches") ? JSON.parse(localStorage.getItem("taches")) : [];
    if(index >= 0 && index < taskList.length){
        taskList.splice(index , 1);
        localStorage.setItem("taches", JSON.stringify(taskList));
        AfficherTache();

    }

 }
        