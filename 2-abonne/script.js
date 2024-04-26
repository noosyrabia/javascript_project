// pseudo-code
// Au clic sur le bouton
// le bouton  change de style et de contenu

//Au clic sur l'icône face meh blank
//l'icône se transforme en icône sourire(smiley)

console.log("connecté !")
//Appliquer la règle de 3 s : je séléctionne , je stocke , je soumet une action

//Je séléctionne et je stocke 

const icone = document.querySelector('i');
console.log(icone);

const btnButton = document.querySelector('.btn');
console.log(btnButton);

//Je soumet l'icone à une action au clic 
icone.addEventListener('click', function(){
    console.log("icône cliqué !");
    // if(icone.style.color === "yellow"){
    //     icone.style.color= "";
    // }
    // else{ icone.style.color = "yellow"};//autre option utiliser les classses pour alterner

    icone.classList.toggle("fa-face-smile");
    icone.classList.toggle("happy")

})

//Je soumet le bouton à une action au clic 

btnButton.addEventListener('click', function(){
    console.log("bouton cliqué"); 
    if(btnButton.innerText === "Abonné"){
        btnButton.innerText = "Abonnez-vous"
    }
    else{
        btnButton.innerText = 'Abonné'
    }
    btnButton.classList.toggle('abonne')


})


