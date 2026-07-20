/*==================================================
        AI ENGINEER PORTFOLIO JAVASCRIPT
==================================================*/

/*================ MOBILE NAVBAR ================*/

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        navLinks.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");

            navLinks.classList.remove("active");

        });

    });

}

/*================ CLOSE MENU OUTSIDE CLICK =================*/


document.addEventListener("click", (e) => {


    if (

        navLinks &&

        menuToggle &&

        !navLinks.contains(e.target) &&

        !menuToggle.contains(e.target)

    ) {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

    }


});



/*================ CLOSE MENU ESC KEY =================*/


document.addEventListener("keydown", (e) => {


    if (e.key === "Escape") {


        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");


    }


});


/*================ STICKY NAVBAR ================*/


const header = document.querySelector("header");


if (header) {

    window.addEventListener("scroll", () => {


        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        }
        else {

            header.classList.remove("scrolled");

        }


    });

}





/*================ ACTIVE NAV LINK ================*/


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.id;

        }


    });



    navItems.forEach(link => {


        link.classList.remove("active");


        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }


    });



});







/*================ TYPED JS =================*/


if (document.querySelector("#element") && typeof Typed !== "undefined") {


    new Typed("#element", {


        strings: [

            "AI Engineer",

            "Software Developer",

            "Real-World Problem Solver"

        ],


        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1500,

        loop: true


    });


}







/*================ AOS ANIMATION =================*/


if (typeof AOS !== "undefined") {


    AOS.init({

        duration: 900,

        once: true,

        offset: 100

    });


}




/*=========================================
      PREMIUM AI NEURAL PARTICLES
=========================================*/


if (document.getElementById("tsparticles")) {


    tsParticles.load("tsparticles", {


        fullScreen: {

            enable: false

        },


        particles: {


            number: {

                value: 55,

                density: {

                    enable: true,

                    area: 900

                }

            },


            color: {

                value: [

                    "#38BDF8",

                    "#0EA5E9",

                    "#7DD3FC"

                ]

            },


            shape: {

                type: "circle"

            },


            opacity: {


                value: {

                    min: .25,

                    max: .8

                },


                animation: {


                    enable: true,

                    speed: 1.5,

                    minimumValue: .2,

                    sync: false


                }

            },



            size: {


                value: {


                    min: 1,

                    max: 4


                },


                animation: {


                    enable: true,

                    speed: 2,

                    minimumValue: 1,

                    sync: false


                }

            },



            links: {


                enable: true,


                distance: 150,


                color: "#38BDF8",


                opacity: .35,


                width: 1


            },



            move: {


                enable: true,


                speed: .7,


                direction: "none",


                random: true,


                straight: false,


                outModes: {


                    default: "out"


                }


            }



        },




        interactivity: {


            events: {


                onHover: {


                    enable: true,


                    mode: "grab"


                },


                onClick: {


                    enable: true,


                    mode: "push"


                }



            },



            modes: {


                grab: {


                    distance: 180,


                    links: {


                        opacity: .8


                    }


                },


                push: {


                    quantity: 4


                }



            }


        },



        detectRetina: true


    });


}

/*================ EMAILJS CONTACT FORM =================*/


const contactForm = document.getElementById("contact-form");


if (contactForm && typeof emailjs !== "undefined") {



    emailjs.init({

        publicKey: "SIJreWRVxSH_mqI7c"

    });



    contactForm.addEventListener("submit", function (e) {


        e.preventDefault();



        emailjs.sendForm(

            "service_3sjla37",

            "template_112ytzr",

            this


        )

            .then(() => {


                document.getElementById("status").innerHTML =
                    "Message sent successfully 🚀";


                contactForm.reset();


            })


            .catch(() => {


                document.getElementById("status").innerHTML =
                    "Something went wrong. Please try again.";


            });


    });


}







/*================ CURRENT YEAR =================*/


const year = document.querySelector(".copyright");


if (year) {


    year.innerHTML =
        `© ${new Date().getFullYear()} Portfolio. All Rights Reserved.`;


}
