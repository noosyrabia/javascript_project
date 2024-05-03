console.log("connecté !")

// Pseudo code 
// Au clic sur une quetion 
//la réponse correspondante apparait
// Au clic suivant sur la même question
//la réponse correspondante disparait 

//Je selectionne en une seule fois toute les questions et je stocke
// J'applique à chacune  le même évènement 

// *********************************************
//Au clic sur chaque élément du tableau
//la réponse correspondante apparait

//Je soumet chaque élément du tableau à une même action

const questions = document.querySelectorAll(".question"); 
console.log(questions);

questions.forEach((item)=>{
//Ajout d'un évènement au click à chaque item trouver 
item.addEventListener("click", function(){
    console.log(item,"item cliqué !")
    //Je sélectionne et je stocke la DIV suivante de l'élémént cliqué (c'est l'élément de référence)
    const nextDiv = item.nextElementSibling;
    console.log(nextDiv);
    //rendre la div réponse  visible ou invisible
    nextDiv.classList.toggle("visible");
    //Je cible et je stocke l'icone de l'item
    const icone = item.lastElementChild ; 
    console.log(icone);
    icone.classList.toggle('fa-chevron-up'); 
    icone.classList.toggle('fa-chevron-down');

} )

})


// const elementSuivant = elementDeReference.nextElementSibling;
// À partir de l’élément de référence (item), on demande à JavaScript de cibler 
// son voisin de même niveau (nextElementSibling). La variable nextDiv contient donc la DIV voisine. 
// Voyons le résultat dans la console.


//Utilisation du propriété nextElementSibling et de la propriété lastElementChild

