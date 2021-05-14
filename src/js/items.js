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
    home: document.querySelector('#onOffBtn'),
  },
};
const timeline = gsap
  .timeline({ paused: true })
  .to('#onOffBtn', 0.3, {
    scale: 1.3,
    x: 200,
    scale: 0.3,
    y: -600,
  })
  .to('#onOffBtn', 0.3, {})
  .to(
    '.glass',
    1,
    {
      y: '-100%',
      opacity: 0,
      display: 'none',
    },
    0.2,
  )
  .to('.items', 0.8, {
    marginTop: '15vh',
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
