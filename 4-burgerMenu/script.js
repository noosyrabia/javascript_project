console.log("connecté!");

//Tache : Faire apparaitre la fenêtre modale au click

// Pseudocode:
//Au clic sur l'icone 
//la div modale descent jusqu'en bas de l'écran
//L'icone se modifie en croix

//Au clic suivant 
//La div modale remonte jusqu'en haut de l'écran
//et l'icone reprend sa forme d'origine (menu burger)

// ************************************************************

// Je sélectionne je stocke 

// L'icone burger
const icone = document.querySelector(".navbar-mobile i"); 
console.log(icone); 

//La div modale
const modale = document.querySelector('.modal')
console.log(modale); 

//Je soumet à une action 

icone.addEventListener('click', function() {
    console.log("Icône burger cliquée !");
    icone.classList.toggle('fa-times');
    modale.classList.toggle('change-modal'); // Basculer la classe change-modal
  });
  