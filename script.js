/* ======================
      TYPING EFFECT
====================== */

var typed = new Typed("#element", {

    strings: [

        "AI Engineer",

        "Software Developer",

        "Real-World Problems Solver"

    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1500,

    loop: true

});


/* ======================
      PARTICLE AI BG
====================== */

tsParticles.load("tsparticles", {

    background: {

        color: {

            value: "#050816"

        }

    },

    particles: {

        number: {

            value: 90

        },

        color: {

            value: [

                "#22D3EE",

                "#A855F7",

                "#EC4899"

            ]

        },

        links: {

            enable: true,

            distance: 150,

            opacity: .35,

            color: "#A855F7"

        },

        move: {

            enable: true,

            speed: 1

        },

        size: {

            value: 3

        }

    }

});


/* ======================
          AOS
====================== */

AOS.init({

    duration: 1000,

    once: true

});


/* ======================
        EMAIL JS
====================== */

emailjs.init({

    publicKey: "SIJreWRVxSH_mqI7c"

});

document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(

            "service_3sjla37",

            "template_112ytzr",

            this

        )

            .then(() => {

                document.getElementById("status").innerHTML =
                    "Message sent successfully 🚀";

                this.reset();

            })

            .catch(() => {

                document.getElementById("status").innerHTML =
                    "Failed to send message";

            });

    });


/* ======================
    MENU ICON
====================== */
document.addEventListener("DOMContentLoaded", function () {


    const menuToggle = document.querySelector("#menu-toggle");
    const navLinks = document.querySelector("#nav-links");


    // Check elements exist

    if (!menuToggle || !navLinks) {

        console.log("Navbar elements not found");

        return;

    }



    // Hamburger click

    menuToggle.onclick = function (e) {

        e.stopPropagation();

        menuToggle.classList.toggle("active");

        navLinks.classList.toggle("active");

    };




    // Close after clicking menu item

    document.querySelectorAll(".nav-links a").forEach(link => {


        link.onclick = function () {


            menuToggle.classList.remove("active");

            navLinks.classList.remove("active");


        };


    });




    // Click outside close

    document.onclick = function (e) {


        if (

            !navLinks.contains(e.target) &&

            !menuToggle.contains(e.target)

        ) {

            menuToggle.classList.remove("active");

            navLinks.classList.remove("active");


        }


    };



});
