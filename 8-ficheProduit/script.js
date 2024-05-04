console.log("connecté !")

//Pseudo code 
// Au clic sur une vignette;
// celle ci s'affiche en grand format



//Je sélectionne les vignettes 
const vignettes = document.querySelectorAll(".small"); 
console.log("vignettes"); 

//Je sélectionne l'image cible (celle qui est en grand format)
const fullImg = document.getElementById('full');
console.log(fullImg);

// Il faut passer par une boucle pour affecter le m^me évènement à tous les vignettes
 
vignettes.forEach((item)=>{
    console.log(item,"Ce message apparait pour chaque item du tableau"); 
    item.addEventListener("click", function(){
        //console.log( item , 'vignette cliquée !')
        //Je récupère l'attribut src de l'image cliquée
        let imgSource = item.getAttribute('src');
        console.log(imgSource);
        //Je place cette vignette dans l'élément cible 
        fullImg.setAttribute('src', imgSource); 


    })
})


//Pseudo code 
//Au clic su le bouton,
//Une phrase apparait indiquant le nombre d'élément dans le panier 
const btn = document.querySelector('.btn-add'); 
console.log(btn);
let panier = 0;
// Je sélectionne la div panier-container
const panierContainer = document.querySelector('.panier-container');
btn.addEventListener('click', function(){
    console.log("bouton cliqué !"); 
    // j'ajoute 1 au compteur 
    panier = panier + 1;
    console.log(panier);
    if(panier < 2){
        panierContainer.innerText = "Vous avez" + " " + panier +" " +"produit dans votre panier";
        }
    else{
        panierContainer.innerText = "Vous avez" + " " + panier +" " +"produits dans votre panier"
    }

}); 