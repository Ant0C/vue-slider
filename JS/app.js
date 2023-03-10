const { createApp } = Vue

const slideElement = document.getElementsByClassName('slide')
let slideAttiva = 0

createApp({
  data() {
    return {
        slides: [
            {
              image: './img/01.webp',
              className: 'slide d-block',
              title: "Marvel's Spiderman Miles Morale",
              text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            },
            {
              image: './img/02.webp',
              className: 'slide',
              title: 'Ratchet & Clank: Rift Apart',
              text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            },
            {
              image: './img/03.webp',
              className: 'slide',
              title: 'Fortnite',
              text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
            },
            {
              image: './img/04.webp',
              className: 'slide',
              title: 'Stray',
              text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            },
            {
              image: './img/05.webp',
              className: 'slide',
              title: "Marvel's Avengers",
              text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
            },
        ],  
    }
  },
  methods: {
    arrowLeft () {
    
        let slideCorrente = slideElement[slideAttiva]
	    slideCorrente.classList.remove("d-block")

	    if (slideAttiva > 0) {
            slideAttiva--
        } else {
            slideAttiva = slideElement.length - 1
        }

	    let prossimaSlide = slideElement[slideAttiva]
	    prossimaSlide.classList.add("d-block")
    },
    
    arrowRight () {
    
        let slideCorrente = slideElement[slideAttiva]
	    slideCorrente.classList.remove("d-block")

        const lastIndex = slideElement.length - 1

	    if (slideAttiva < lastIndex) {
            slideAttiva += 1
        } else {
            slideAttiva = 0
        }

	    let prossimaSlide = slideElement[slideAttiva]
	    prossimaSlide.classList.add("d-block")
    }
  }
  
}).mount('#app')


