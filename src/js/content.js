let DOM = {
    content: {
        section: document.querySelector('main'),
        isVisible: false,
    },
    home: {
        section: document.querySelector('header'),
        isVisible: true,
    },
    links:{
        home: document.querySelector('#onOffBtn'),
    }
}
const timeline = gsap.timeline({paused:true})
.to("#onOffBtn", 2,{
    scale: 0.3,
    y: -500,  
    x: 200,
})

function switchContent(){
    console.log(this)
    DOM.content.section.classList[DOM.content.isVisible ? 'add' : 'remove']('frame__about-item--current');
    DOM.home.section.classList[DOM.home.isVisible ? 'add' : 'remove']('frame__about-item--current');
    timeline[DOM.content.isVisible ? 'reverse' : 'play']();
    DOM.home.isVisible = !DOM.home.isVisible;
    DOM.content.isVisible = !DOM.content.isVisible;
    
}


DOM.links.home.addEventListener('click', ()=> switchContent());