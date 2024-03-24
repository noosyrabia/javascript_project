// Sélection des éléments HTML et stockage dans des variables
const titre = document.getElementById('titre');
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
const btnPink = document.getElementById('btn-pink');
const btnReplay = document.getElementById('replay');

//modification de couleur des éléments
titre.style.color = "green";


// Affichage des éléments sélectionnés dans la console pour vérification
console.log(titre, "élément titre");
console.log(btnRed, "bouton rouge");
console.log(btnBlue, "bouton bleu");
console.log(btnPink, "bouton rose");
console.log(btnReplay, "bouton rejouer");

// Initialisation du compteur
let compteur = 0;
console.log(compteur, "compteur au démarrage");

// Fonction pour incrémenter le compteur de 10
function add() {
    compteur += 10;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = "Score :" + compteur;
}

// Fonction pour décrémenter le compteur de 10 si celui-ci est supérieur à 0
function substract() {
    if(compteur > 0){
        compteur -= 10;
        console.log(compteur, "compteur après décrémentation");
        titre.innerText = 'Score :' + compteur}
    else{ compteur = 0}
}

//Fonction pour rafraichir la page 
function reload(){
    location.reload()
}

// Événements au clic sur les boutons pour appeler les fonctions
btnRed.addEventListener('click', function() {
    console.log("cercle rouge cliqué");
    add();
});

btnBlue.addEventListener('click', function() {
    console.log("cercle bleu cliqué");
    add();
});

btnPink.addEventListener('click', function() {
    console.log("cercle rose cliqué");
    substract();
});

btnReplay.addEventListener( 'click', function(){
    console.log("bouton rejouer");
   reload();
})

// Suppression des cercles après 30 secondes
setTimeout(function() {
    console.log("Fin du chrono !");
    btnRed.remove();
    btnBlue.remove();
    btnPink.remove();
}, 30000);
