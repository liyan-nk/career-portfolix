/* ==========================================
PORTFOLIX CAREER PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  
/* ======================================
   SMOOTH SCROLL
====================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        });

    });

});


/* ======================================
   REVEAL ON SCROLL
====================================== */

const revealElements = document.querySelectorAll(
    ".why-card, .job-card, .timeline-item, .culture-section img"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    el.classList.add("reveal-item");

    observer.observe(el);

});


/* ======================================
   JOB CARD MAGNET EFFECT
====================================== */

const cards = document.querySelectorAll(".job-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 8;

        const rotateX =
            ((y / rect.height) - 0.5) * -8;

        card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/* ======================================
   APPLICATION FORM
====================================== */

const form =
    document.querySelector(
        ".career-form-section form"
    );

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button =
            this.querySelector("button");

        button.innerHTML =
            "Application Submitted ✓";

        button.disabled = true;

        button.style.opacity = ".8";

        setTimeout(() => {

            button.innerHTML =
                "Submit Application";

            button.disabled = false;

            button.style.opacity = "1";

            form.reset();

        }, 3000);

    });

}


/* ======================================
   NAVBAR SCROLL EFFECT
====================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove(
            "navbar-scrolled"
        );

    }

});
  

});

/* ==========================================
FLOATING ORBS
========================================== */

window.addEventListener("mousemove", (e) => {

  
const orb1 =
    document.querySelector(".orb-1");

const orb2 =
    document.querySelector(".orb-2");

if (!orb1 || !orb2) return;

const x =
    e.clientX / window.innerWidth;

const y =
    e.clientY / window.innerHeight;

orb1.style.transform =
    `translate(${x * 40}px, ${y * 40}px)`;

orb2.style.transform =
    `translate(${-x * 50}px, ${-y * 50}px)`;
  

});
const resumeUpload =
document.getElementById("resumeUpload");

if(resumeUpload){

    resumeUpload.addEventListener(
        "change",
        function(){

            const fileName =
            document.getElementById("fileName");

            if(this.files.length){

                fileName.textContent =
                this.files[0].name;

            }

        }
    );

}

window.addEventListener("load", () => {
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
        document.body.style.overflow = "";
    });
});