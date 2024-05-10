console.log('connecté !')

//je séléctionne et je stocke la div posts 

const postsContainer = document.querySelector(".posts");
console.log(postsContainer);
//Création d'un objet 
// const post ={
//     titre: "SEO, Les bonnes pratiques", 
//     hashtag : "#SEO",
//     extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.In finibus, lacus rhoncus porttitor consequat, arcu enim lobortis neque, a porttitor neque ante a felis. ",
//  }


//  j'accède à la valeur de la propriété du titre 
// const t = post.titre ; 
// console.log(t);

//Initialisation d'un tableau array  et création d'un tableau d'objet
const posts =[
    //Création d'un objet 
    {
        titre: "SEO, Les bonnes pratiques", 
        hashtag : "#SEO",
        extrait : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In finibus, lacus rhoncus porttitor consequat, arcu enim 
                lobortis neque, a porttitor neque ante a felis. `,
    },
    {
        titre: "Bien débuter en référencement payant", 
        hashtag : "#référencement",
        extrait : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In finibus, lacus rhoncus porttitor consequat, arcu enim 
                lobortis neque, a porttitor neque ante a felis. `,
    },

    {
        titre: "Content Marketing, les bons arguments", 
        hashtag : "#contentmarketing",
        extrait : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In finibus, lacus rhoncus porttitor consequat, arcu enim 
                lobortis neque, a porttitor neque ante a felis. `,
    },
    {
        titre: "Content Manager , les bons atouts", 
        hashtag : "#cmarketing",
        extrait : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In finibus, lacus rhoncus porttitor consequat, arcu enim 
                lobortis neque, a porttitor neque ante a felis. `,
    },
    {
        titre: "CEO , les bonnes pistes ", 
        hashtag : "#CEO",
        extrait : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In finibus, lacus rhoncus porttitor consequat, arcu enim 
                lobortis neque, a porttitor neque ante a felis. `,
    },
    

];
console.log(posts);

// Je passe en revue chaque élément du tableau
posts.forEach(item =>{
    console.log(item);
  
// Création d'une div avec Template String
const article = `
                    <div class="post"> 
                        <div class="post-titre">${item.titre}</div>
                        <div class="post-extrait">${item.extrait}</div>
                        <div class="post-hashtag">${item.hashtag}</div>
                    </div>
                `
console.log(article);
//Ajout de l'article dans la DIV dédié postContainer  ( Concaténation)
postsContainer.innerHTML+= article;
});

