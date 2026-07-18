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

/*==========================================
        MOBILE NAVIGATION
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!menuToggle || !navLinks) return;

    // Toggle Mobile Menu
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close Menu When Clicking a Navigation Link
    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    // Close Menu When Clicking Outside
    document.addEventListener("click", (e) => {
        if (
            !menuToggle.contains(e.target) &&
            !navLinks.contains(e.target)
        ) {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        }
    });

    // Close Menu When Window is Resized to Desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        }
    });

});
