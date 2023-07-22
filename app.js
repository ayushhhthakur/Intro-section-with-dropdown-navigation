const openBtn = document.querySelector('.nav__hamburguer');
const closeBtn = document.querySelector('.nav__close');
const list = document.querySelectorAll('.list');
const listItem = document.querySelectorAll('.list__item');
const navLinks = document.querySelector('.nav__links');
const navItem = document.querySelectorAll('.nav__item');
const filter = document.querySelector('.filter');

const mobileMenu = () => {
    for (let i=0 ; i < navItem.length; i++) {
        navItem[i].classList.toggle('nav__item--expanded');
    }
    openBtn.classList.toggle('nav__hamburguer--expand');
    closeBtn.classList.toggle('nav__close');
    closeBtn.style.cursor = "pointer";
    navLinks.classList.toggle('nav__links--open');
    filter.classList.toggle('filter--active');
}

openBtn.addEventListener('click', ()=> {
    mobileMenu();
});

closeBtn.addEventListener('click', ()=>{
    mobileMenu();
});

const dropBtn = document.querySelectorAll('.nav__arrow');

const dropDown = (element, close, open, menu)=> {
    if(element == close) {
        list[menu].setAttribute('aria-expanded', open);
        dropBtn[menu].classList.toggle('nav__arrow--open');     

    } else {
        list[menu].setAttribute('aria-expanded', close);
        dropBtn[menu].classList.toggle('nav__arrow--open');
    }
}

function dropMenus () {
    for (let i = 0; i < dropBtn.length; i++) {
        dropBtn[i].addEventListener('click', (e)=> {
            //features drop menu
            if(e.target.innerText == "Features") {
                const featuresMenu = list[0].attributes[1].value;
                dropDown(featuresMenu, "false", "true", 0);
            // company dropmenu
            } else {
                const companyMenu = list[1].attributes[1].value;
                dropDown(companyMenu, "false", "true", 1);
            }
        });

    }

}

dropMenus();