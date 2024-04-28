console.log("connecté !")

//pseudo-code 
// Au défilement de la page vers le bas 
//La div modal container  apparait 

// Au clic sur le bouton obtenir le code 
//le div code apparait 

// Au clic sur l'icone fermer 
//le div modal-container disparait 

// Je selectionne , je stocke la div modal-container
const modal= document.querySelector(".modal-container");
console.log(modal);


// Je selectionne , je stocke le bouton 
const btn = document.querySelector(".btn-success"); 
console.log(btn);

// Je selectionne , je stocke l'icone fermer 
const icone = document.querySelector("i");
console.log(icone);
//Jeselectionne et je stocke le code 
const code = document.querySelector(".code");
console.log(code);

// Tous les éléments nécessaires ont été stockés , nous pouvons maintenant les manipiler 
// je détecte le défilement
window.addEventListener("scroll", displayModal);


function displayModal(){
    console.log("Défilement de la page détecté!");
    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, 'nombre de pixels depuis le haut de la page');
    if (hauteur > 400){
        console.log("Affichage de la modale !")
        modal.style.display = "flex";
    }

}

// Au clic sur le bouton obtenir le code , le div code apparait
btn.addEventListener("click", function(){
    console.log("bouton cliqué! ");
    code.style.display ="block";
    btn.style.display = "none";
})

// Au clic sur l'icone fermer ,le div modal-container disparait 
icone.addEventListener("click", function(){
    console.log("icone cliqué! ");
    modal.style.display = "none"; 
    window.removeEventListener("scroll", displayModal); 
})