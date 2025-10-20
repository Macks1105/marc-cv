//ANIMATION
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height){
            //ACTIVE NAVBAR LINKS
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
            //ACTIVE SECTIONS FOR ANIMATION ON SCROLL
            sec.classList.add('show-animate');
        }
        //repeating animation scroll
        else{
            sec.classList.remove('show-animate');
        }
    });

    //STICKY HEADER - HIGHLIGHT HEADER ON SCROLL
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //footer animation scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


//Buttons Behavior
// Smooth scroll for Home buttons
let readMoreBtn = document.querySelector('.home .btn-box .btn:nth-child(1)');
let contactMeBtn = document.querySelector('.home .btn-box .btn:nth-child(2)');

let aboutSection = document.querySelector('#about');
let contactSection = document.querySelector('#contact');

readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

contactMeBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

//FB and IG links
let facebookIcon = document.querySelector('.home-sci a:nth-child(1)');
let instagramIcon = document.querySelector('.home-sci a:nth-child(2)');

facebookIcon.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior
    window.open('https://www.facebook.com/share/1738qzE5h9/', '_blank');
});

instagramIcon.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior
    window.open('https://www.instagram.com/mrcfransz?igsh=YWVwMWRxM2d6b2x4', '_blank');
});

//About READ MORE button
let aboutReadMoreBtn = document.querySelector('.about .btn-box .btn');

let journeySection = document.querySelector('#education');

aboutReadMoreBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior
    journeySection.scrollIntoView({ behavior: 'smooth' });
});


