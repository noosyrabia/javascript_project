// const titre = document.getElementById('titre').style.color="green";

//même résultat que le précédent mais juste découper en plusieurs étapes
let titre = document.getElementById('titre');
console.log(titre);
//vérifier le contenu du code dans la console
//Nous pouvons maintenant ajouter l'action à réaliser
titre.style.color= "green";

//Je sélectionne et je stocke
const btnRed = document.getElementById('btn-red');
console.log(btnRed, "bouton rouge");

//Je sélectionne et je stocke
const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue,"bouton bleu") ;

//Je sélectionne et je stocke le bouton jaune 
const btnYellow = document.getElementById( 'btn-yellow') ;
console.log(btnYellow, "bouton jaune");

//Pseudo-code:
//au clique sur le cercle , javascript doit déclencher une action(incrémenter le compteur de 1)

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

btnBlue.addEventListener('click', function(){
    console.log("cercle jaune cliqué");
    substract();
})

let compteur = 0;
console.log(compteur, "compteur au démarrage"); 
function add(){
    compteur = compteur + 10;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = "Score :" + compteur ; //pour afficher le résultat dans la page
    
}
function substract(){
    if (compteur > 0){
        compteur = compteur - 10;
        console.log(compteur, " compteur après décrementation");
        titre.innerText = 'Score :' + compteur; 
    }
    else{compteur = 0}
}
setTimeout(function(){
    //action à réaliser 
    //à la fin du délais 
    console.log("fin du chrono !")
    //je supprime les cercles à la fin du chrono
    btnRed.remove();
    btnBlue.remove();
    btnYellow.remove()
    }, 30000);

//Pseudo-code:
//J'incrémente le compteur : 
//Au démaragge le compteur est à 0 
//Au clic il est incrémenté à 1 
//Au clic sur le compteur rouge ou bleu le compteur augmente de 1

//Pseudo-code après modification:
//J'incrémente le compteur : 
//Au démaragge le compteur est à 0 
//Au clic il est incrémenté à 10 
//Au clic sur le compteur rouge ou bleu le compteur augmente de 10
//Au bout de 10 secondes les cercles disparaisse ( j'utilise seTimeOUt et element.remove() )





