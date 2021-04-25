//Import des images avec un nom pour les réutiliser
import Site1 from '../assets/reservia (1).png';
import Site2 from '../assets/Ohmyfood.jpg';

//Faire appraraitre dans le losange l'image du site lors du survole de son nom
//1)Créer un event lors du survole du nom du site 
//2)Récupérer le nom et y associer l'image correspondante
//3)Intégrer l'img dans le losange

let divSites = document.getElementsByClassName('projectDisplay');

for(const elt of divSites){
    elt.addEventListener('mouseover', (event) =>{
        let catchSiteName = event.path[0].attributes.class.value;
        let siteId = catchSiteName.split(' ')[0]; 
        displaySiteImg(siteId);

    elt.addEventListener('mouseleave', (event) => {
        console.log(event)
        let imgDisplay = document.getElementsByClassName('imgDisplay');
        imgDisplay[0].remove();
            
    })
    })
}
function displaySiteImg(siteId){
    let losangeDisplay = document.getElementById('img-display');
    let imgSite = document.createElement('img');
    console.log(siteId)
    losangeDisplay.appendChild(imgSite);
    imgSite.setAttribute('class', 'imgDisplay')
    console.log(typeof siteId)
    switch(siteId){
        case 'site1' :
            imgSite.src = Site1;
            break;
        case 'site2' :
            imgSite.src = Site2;
            break;
        case 'site3' :
            imgSite.src = Site3;
            break;
        default:
    console.log(`Sorry, we are out of image.`);
    }
    
    
};