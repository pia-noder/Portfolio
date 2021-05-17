const DOM = {
  home: {
    section: document.querySelector('header'),
    isVisible: true,
  },
  items: {
    section: document.querySelector('.items'),
    isVisible: false,
  },
  links: {
    home: document.querySelector('#onBtn'),
    content: document.querySelector('#offBtn')
  },
};
const timeline = gsap
  .timeline({ paused: true })
  .to('.onOffIcon',0.5,{
    rotation: 45,
  })
  .to('#onOffBtn', 0.5, {
    scale: 1.3,
    scale:0.8,
    opacity:0,
  },0.3)
  .to(
    'header',
    1,
    {
      y: '-30%',
      opacity: 0,
      display: 'none',
    },
    0.3,
  )
  .to('#onOffBtn', 0.5, {
    x: -650,
    scale: 0.8,
    y: -450,
  },0.8)
  .to('.items', 0.8, {
   
    opacity: 1,
    display: 'block',
  })
  .to('#onOffBtn', 0.5, {
    opacity: 1,
  });

function switchToItems() {
  timeline[DOM.items.isVisible ? 'reverse' : 'play']();
  // DOM.items.section.classList[DOM.items.isVisible ? 'remove' : 'add']('frame__about-item--current');
  // DOM.home.section.classList[DOM.home.isVisible ? 'remove' : 'add']('frame__about-item--current');

  DOM.home.isVisible = !DOM.home.isVisible;
  DOM.items.isVisible = !DOM.items.isVisible;
}

DOM.links.home.addEventListener('click', () => switchToItems());
DOM.links.content.addEventListener('click',() => switchToItems())
