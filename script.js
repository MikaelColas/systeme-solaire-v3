const planetButtons = document.querySelectorAll('[data-orbite]');// Sélectionne tous les boutons avec l'attribut data-orbite
const infosPlanetes = document.getElementById("infos-planetes");
const soleil = document.getElementById("soleil");





//Lorsqu'on survole un bouton
function highlightOrbite(event) {
    // Obtenir le nom de la planète à partir de l'attribut data-orbite
    const planetName = event.target.getAttribute('data-orbite'); 
    const orbiteElement = document.querySelector(`.${planetName}-orbite`); // Sélectionne la classe orbite correspondante
    if (orbiteElement){
        orbiteElement.style.border = "3px solid #f9c05f"; //higlight l'orbite
    }
    else{ // s'il n'y a pas d'orbite, c'est le soleil donc on fais de meme pour la classe soleil
        soleil.style.border = "3px solid #f9c05f";
    }
    // Afficher la carte d'infos de la planete
    infosPlanetes.style.animation = "apparition 0.5s ease forwards";
    // Déplacer le systeme à droite
    soleil.classList.add('deplacement-droite')
}



//Lorsqu'on arrete de survoler un bouton
function unhighlightOrbite(event) {
    // target l'attribut data-orbite du bouton de la planete (event)
    const planetName = event.target.getAttribute('data-orbite');
    // Sélectionne la classe orbite correspondante
    const orbiteElement = document.querySelector(`.${planetName}-orbite`);
    if (orbiteElement){
        orbiteElement.style.border = "1px dotted #ddd9"; //remise à l'état initial des planetes
    }
    else{
        soleil.style.border = "none";//remise à l'état initial du soleil
        
    }
    // Enlever la carte d'infos de la planete
    infosPlanetes.style.animation = "none";
    // Redéplacer le systeme au centre
    soleil.style.transition = "transform 0.5s ease";
    soleil.classList.remove('deplacement-droite')
}



//updater les infos de la planete dont le bouton est survolé
function updateInfosPlanetes(event) {
    const planetName = event.target.getAttribute('data-orbite');
    const planetDescription = planetDescriptions[planetName];
    const infosPlanetes = document.getElementById("infos-planetes");

    for (const property in planetDescription) {
        if (planetDescription.hasOwnProperty(property)) {
            const element = infosPlanetes.querySelector(`p.${property}`);
            if (element) {
                // Condition spéciale pour le nom qui est affiché sans "Nom : "
                if (property === "nom") {
                    element.textContent = planetDescription[property];
                } else if (property === "satellites" && planetDescription[property].length === 0) {
                    // Vérifier si la propriété "satellites" est vide, alors ne pas l'afficher
                    element.textContent = ''
                } else {
                    element.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)} : ${planetDescription[property]}`;
                }
            }
        }
    }
}




planetButtons.forEach(button => {
    button.addEventListener('mouseenter', updateInfosPlanetes);
    button.addEventListener('mouseenter', highlightOrbite);
    button.addEventListener('mouseleave', unhighlightOrbite);
});


