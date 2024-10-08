const header = document.querySelector('header')
let lastScrollTop = 0

// Menu humburger
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')

window.onscroll = () => {
    const currentScroll = window.scrollY
    if(currentScroll > lastScrollTop) {
        header.classList.add('hidden')
    } else {
        header.classList.remove('hidden')
        nav.classList.remove('active')
        hamburger.classList.remove('active')
    }

    lastScrollTop = 0 ? 0 : currentScroll
}


// Menu humburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
})

particlesJS("home", {
    "particles": {
        "number": {
            "value": 55,
            "density": {
                "enable": false,
                "value_area": 1736.124811591
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#90eb36"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.9,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 1,
            "width": 1.4430708547789706
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "top-right",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})