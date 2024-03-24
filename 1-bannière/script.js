console.log("connecté !");
// Au clic (évènement) sur le bouton accepté(élément)
// la div cookies(élément) deviens invisible(action)

//Appliquer la règle de 3 s : je séléctionne , je stocke , je soumet une action

//Je séléctionne, je stocke 
//bouton .btn-success
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess); //On.qaffiche l'objet dans la console pour vérifier qu'il est bien chargé et que tout fonctionne

//DIV cookies
const cookies = document.querySelector('.cookies');
console.log(cookies);

//Je soumet la Div cookies à une action au click
btnSuccess.addEventListener('click', function(){
    console.log("bouton cliqué !");
    cookies.style.opacity = "0"
})