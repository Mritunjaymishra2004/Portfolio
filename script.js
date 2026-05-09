// Typing Animation

const typingText = document.querySelector('.typing');

const words = [
    'Software Engineer',
    'Web Developer',
    'Frontend Developer',
    'Python Developer'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1000);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// Mobile Menu

const menuBtn =
    document.querySelector('.menu-btn');

const navLinks =
    document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});


// Education Popup

function showEducation(
    degree,
    college,
    year,
    marks
){

    document.getElementById(
        'educationPopup'
    ).style.display = 'flex';

    document.getElementById(
        'eduDegree'
    ).innerText = degree;

    document.getElementById(
        'eduCollege'
    ).innerText = college;

    document.getElementById(
        'eduYear'
    ).innerText = year;

    document.getElementById(
        'eduMarks'
    ).innerText =
        'CGPA / Percentage : ' + marks;
}


function closeEducationPopup(){

    document.getElementById(
        'educationPopup'
    ).style.display = 'none';
}




// Skill Popup

function showSkill(skill, percent) {

    document.getElementById('skillPopup')
        .style.display = 'flex';

    document.getElementById('skillName')
        .innerText = skill;

    document.getElementById('skillPercent')
        .innerText = percent + '% Knowledge';

    document.getElementById('progress')
        .style.width = percent + '%';
}


function closePopup() {

    document.getElementById('skillPopup')
        .style.display = 'none';

    document.getElementById('progress')
        .style.width = '0';
}


// Show Certificates

function toggleCertificates() {

    const container =
        document.getElementById(
            'certificateContainer'
        );

    if (container.style.display === 'grid') {

        container.style.display = 'none';

    } else {

        container.style.display = 'grid';
    }
}


// Project Scroll Animation

const projects =
    document.querySelectorAll('.hidden-project');

window.addEventListener('scroll', () => {

    projects.forEach(project => {

        const projectTop =
            project.getBoundingClientRect().top;

        if (projectTop < window.innerHeight - 100) {

            project.classList.add('show-project');
        }
    });

});


// Active Navbar Scroll Effect

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {

            current =
                section.getAttribute("id");
        }
    });

    navItems.forEach(a => {

        a.classList.remove("active");

        if (a.getAttribute("href") === `#${current}`) {

            a.classList.add("active");
        }
    });
});


// Section Reveal Animation

const allSections =
    document.querySelectorAll('.section');

window.addEventListener('scroll', () => {

    allSections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            section.classList.add('show-section');
        }
    });
});


// Close Mobile Menu After Click

navItems.forEach(item => {

    item.addEventListener('click', () => {

        navLinks.classList.remove('active');

    });
});


// Scroll To Top Button

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});