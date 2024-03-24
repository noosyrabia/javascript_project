// const titre = document.getElementById('titre').style.color="green";

//même résultat que le précédent mais juste découper en plusieurs étapes
let titre = document.getElementById('titre');
console.log(titre);
//vérifier le contenu du code dans la console
//Nous pouvons maintenant ajouter l'action à réaliser
titre.style.color= "green";

let test = document.getElementById('test');
console.log(test);
test.style.color = "red"

//Je sélectionne et je stocke
const btnRed = document.getElementById('btn-red');
console.log(btnRed, "bouton rouge");

//Je sélectionne et je stocke
const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue,"bouton bleu") ;

//Pseudo-code:
//au clique sur le cercle , javascript doit déclancher une action(incrémenter le compteur de 1)

//Je soumet l'élémént sélectionnée à une action 
//définir l'évènement à détecter ou gérer : l'action à éxécuter c'est entre accolade dans la  function asynchrone)
btnRed.addEventListener('click', function(){
    console.log("cercle rouge cliqué")
    add()
})

btnBlue.addEventListener('click', function(){
    console.log("cercle bleu cliqué")
    add()
})

let compteur = 0;
console.log(compteur, "compteur au démarrage"); 
function add(){
    compteur = compteur + 2;
    console.log(compteur, "compteur après incrémentation");
    // titre.innerText = compteur; //pour afficher le résultat dans la page
    test.innerText = compteur + "compteur après incrémentation";
    
}

//Pseudo-code:
//J'incrémente le compteur : 
//Au démaragge le compteur est à 0 
//Au clic il est incrémenté à 1 
//Au clic sur le compteur rouge ou bleu le compteur augmente de 1




