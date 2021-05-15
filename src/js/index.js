const txtAnim = document.querySelector('#txtAnim');
new Typewriter(txtAnim, { deleteSpeed: 30 })
  .typeString(
    '<strong id="nameAnim"><span class="jobAnim">Développeuse <span style="color:#4361EE">Front-End !</span></span></strong>'
  )
  .pauseFor(1000)
  .start();
// Animation bloc de présentation dans le header
gsap.from('.txtIntro', 2, {
  delay: 2,
  x: -60,
  opacity: 0,
  ease: Expo.easeInOut,
});
