console.log("connecté ! ")
//pseudo code

// Au clic sur le bouton
//Une div est créer et est ajouter dans la div container-notification
// Le nouvel élément siparait au bout de quekques secondes

// Je slectionne et je stocke les éléments néccessaire 

// Le bouton
const btn = document.querySelector(".btn");
console.log(btn);

//la div container _notifications 
const container = document.querySelector(".container-notifications");
console.log(container);

// Je soumet à une actio n pour faire apparaitre la div : "notifications container"
btn.addEventListener("click", function(){
    console.log("bouton cliqué !");
    // je crée un élémént 
    const notification = document.createElement('div');
    // ajout de la classe et style à l'élémént créer
    notification.classList.add("toast"); 
    // j'insère du contenu de texte
    notification.innerText = " Votre fichier est bien enregistré";
    //J'accroche le notification à un élémént parent ( div container notification)
    container.appendChild(notification);
    //A la fin du chrono je retire la notification du DOM
    setTimeout(function(){
        notification.remove()
    }, 2000);
})

//A la fin du temps fixé faire disparaitre la div DOM
