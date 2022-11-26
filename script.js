/*Variables*/
const iconMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

/*Funciones*/
const desplegarMenu = () => {

    mobileMenu.style.display = 'block';
    iconMenu.style.opacity = '50%';
    iconMenu.style.transform = 'rotate(90deg)';
    
};

const replegarMenu = () => {

    mobileMenu.style.display = 'none';
    iconMenu.style.opacity = '100%';
    iconMenu.style.transform = 'rotate(0deg)';

};

const displayIconMenu = (e) => {

    e.preventDefault();

    if ( mobileMenu.style.display === 'block' )
    {
        replegarMenu();
    }
    else
    {
        desplegarMenu();
    }
    
};

const defaultPage = (e) => {

    e.preventDefault();

    if ( window.innerWidth >= 1024 )
    {
        replegarMenu();
    }

};

/*Eventos*/
iconMenu.addEventListener('click', displayIconMenu);

window.addEventListener("resize", defaultPage);

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};  

/*Fuente: https://www.kodetop.com/efecto-smooth-scroll-con-css-o-javascript/  */