let DOM = {
    home: {
        section: document.querySelector('header'),
        isVisible: true,
    },
    content: {
        section: document.querySelector('main'),
        isVisible: false,
    },
    links:{
        home: document.querySelector('#onOffBtn'),
    }
}
const timeline = gsap.timeline({paused:true})
.to("#onOffBtn", 0.3,{ 
    scale:1.2,
    x: 200,
    scale: 0.3,
    y: -500, 
})
.to("#onOffBtn", 0.3,{ 
    scale:0,
 
})
.to('.glass', 1, {
    y:'-100%',
    opacity:0,
    display: 'none',
},0.2)
.to("main",0.8,{
    marginTop:"15vh",
    opacity:1,
    display:'block',
})
.to("#onOffBtn",0.5,{
    opacity:1,
})

function switchContent(){
    timeline[DOM.content.isVisible ? 'reverse' : 'play']();
    //DOM.content.section.classList[DOM.content.isVisible ? 'remove' : 'add']('frame__about-item--current');
    //DOM.home.section.classList[DOM.home.isVisible ? 'remove' : 'add']('frame__about-item--current');
    
    DOM.home.isVisible = !DOM.home.isVisible;
    DOM.content.isVisible = !DOM.content.isVisible;
    
}

DOM.links.home.addEventListener('click', ()=> switchContent());