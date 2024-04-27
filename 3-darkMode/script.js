console.log("connecté !");
//Pseudo-code : commençons par formaliser ce que nous allons réaliser

//Au clic sur la div switch,
//Le cercle se déplace 

//L'icone se déplace et se transforme
//La div container change de couleur au fond, 
//Le titre change

// Ce pseudo-code repose sur la méthode de 3 S et nous permet d'identifier tout les éléments dont on a besoin en javascript
//S = Selectionner
//S = Stocker
//S = Soumettre à une action 

//Je sélectionne et je stocke la div switch, le cercle, l'icone, le div container, le titre 

//Je sélectionne et je stocke la div switch
 const switchBox = document.querySelector('.switch'); 
 console.log(switchBox); 

// Je sélectionne et je stocke le cercle button
const cercleBtn = document.querySelector('.btn')
console.log(cercleBtn);

// Je sélectionne et je stocke l'icône iframe
const icone = document.querySelector('i');
console.log(icone);

// Je sélectionne et je stocke le div container 
const container = document.querySelector('.container');
console.log(container); 

// Je sélectionne et je stocke le titre 
const titre = document.querySelector('h1');
console.log(titre)

//Je soumets les éléments stocker à une action 
//Au clic à la div switch, une suite d'action va s'éxécuter
switchBox.addEventListener('click', function(){
    console.log("DIV cliquée !");
    cercleBtn.classList.toggle('btn-change');
    icone.classList.toggle('icone-change');
    // Basculer entre les classes pour l'icône soleil et l'icône lune
    icone.classList.toggle('fa-moon');
    //La div switch change de couleur de fond 
    switchBox.classList.toggle('switch-change');
    //La div container change de couleur de fond 
    container.classList.toggle('container-change');
    //le titre change 
    if(titre === "DARK MODE" ){
        titre.innerText= "LIGHT MODE"}
        else{
            titre.innerText= "DARK MODE" 
        }
    }  
)

//Défi :Ajout de bouton + et - qui augmente et diminue le contraste

// je selectionne, je stocke les boutons 
const btnPlus = document.querySelector('.plus');
console.log(btnPlus)
const btnMoins = document.querySelector('.moins');
console.log(btnMoins); 

//je soumets à une action 
btnPlus.addEventListener('click', function(){
    console.log("bouton plus cliqué!");

    // Obtenez la couleur de fond actuelle du conteneur
    let currentBackgroundColor = window.getComputedStyle(container).getPropertyValue('background-color');

    // Convertir la couleur de fond actuelle en un tableau de valeurs RGB
    let rgbValues = currentBackgroundColor.match(/\d+/g);

    // Diminuer le contraste en augmentant la valeur de chaque composante RGB
    let adjustedRGBValues = rgbValues.map(value => Math.max(0, parseInt(value) - 20));

    // Construire la nouvelle couleur de fond avec les valeurs RGB ajustées
    let newBackgroundColor = `rgb(${adjustedRGBValues[0]}, ${adjustedRGBValues[1]}, ${adjustedRGBValues[2]})`;

    // Appliquer la nouvelle couleur de fond au div container
    container.style.backgroundColor = newBackgroundColor;
}); 

btnMoins.addEventListener('click', function(){
    console.log("bouton moins cliqué!");

    // Obtenez la couleur de fond actuelle du conteneur
    let currentBackgroundColor = window.getComputedStyle(container).getPropertyValue('background-color');

    // Convertir la couleur de fond actuelle en un tableau de valeurs RGB
    let rgbValues = currentBackgroundColor.match(/\d+/g);

    // Augmenter le contraste en diminuant la valeur de chaque composante RGB
    let adjustedRGBValues = rgbValues.map(value => Math.min(255, parseInt(value) + 20));

    // Construire la nouvelle couleur de fond avec les valeurs RGB ajustées
    let newBackgroundColor = `rgb(${adjustedRGBValues[0]}, ${adjustedRGBValues[1]}, ${adjustedRGBValues[2]})`;

    // Appliquer la nouvelle couleur de fond au div container
    container.style.backgroundColor = newBackgroundColor;
}); 
