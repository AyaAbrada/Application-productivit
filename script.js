function text(){
    if(document.getElementById("titreInput").value == "" ){
        alert("Entrer le titre");}
    }
function text2(){        
    if(document.getElementById("prioriteSelect").value == ""){
        alert("Choisir une priorité")}
    }

document.getElementById("buttonn").addEventListener("click", () => {
    text();
    text2();
})

document.getElementById("buttonn").addEventListener("click" , function(event){
    event.preventDefault();
    AjouterTache();
})

function AjouterTache(){
    const titre = document.getElementById("titreInput").value;
    const propriete = document.getElementById("prioriteSelect").value;

    const tache = {titre , propriete};

     // Charger les taches existants depuis localStorage
     const existingtaches = JSON.parse(localStorage.getItem("taches")) || [];

     // Ajouter le nouveau tache à la liste
     existingtaches.push(tache);

     // Mettre à jour localStorage
     localStorage.setItem("taches", JSON.stringify(existingtaches));
        console.log(existingtaches);
        

     // Rediriger vers la page affiche.html
     // window.location.href = 'Afficher.html';

}




let time = 25 * 60; // 25 minutes en secondes
let interval; // Variable pour stocker l'intervalle

// Fonction pour démarrer le timer
function startTimer() {
  const timerElement = document.getElementById('timer');

  // Si le timer est déjà en cours, on ne le redémarre pas
  if (interval) return;

  // Démarrer le compte à rebours
  interval = setInterval(() => {
    let minutes = Math.floor(time / 60); // Récupérer les minutes
    let seconds = time % 60; // Récupérer les secondes restantes

    // Mettre à jour l'affichage du timer avec un format MM:SS
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Si le temps est écoulé, on arrête le timer
    if (time === 0) {
      clearInterval(interval);
      interval = null; // Réinitialiser l'intervalle pour pouvoir redémarrer
      alert('Le temps est écoulé !');
    } else {
      time--; // Décrémenter le temps chaque seconde
    }
  }, 1000); // Mise à jour chaque seconde
}

// Ajouter un événement au bouton pour démarrer le timer
document.getElementById('startButton').addEventListener('click', startTimer);
