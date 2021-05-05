const txtAnim = document.querySelector('#txtAnim');

new Typewriter(txtAnim, {
    deleteSpeed: 30,
 
})
.typeString('<strong id="nameAnim">Bonjour, je m\'appelle Charlotte <br/> <span class="jobAnim">Développeuse <span style="color:#0077b6">Front-End !</span></span></strong>')
.pauseFor(1000)
.start()


//Animation bloc de présentation dans le herder

gsap.from(".txtIntro", 2, {
    delay: 2,
    x : -60,
    opacity:0,
    ease: Expo.easeInOut
})
