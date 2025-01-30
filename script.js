function text(){
    if(document.getElementById("titreInput").value == ""){
        alert("Entrer le titre");  
    }else(document.getElementById("prioriteSelect").value == ""){
        alert("Choisir une priorité")
    }
}

document.getElementById("buttonn").addEventListener("click", () => {
    text();
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
