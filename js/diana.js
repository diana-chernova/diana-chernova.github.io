window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarRecolor = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.add('d-navbar-recolor-a')
            navbarCollapsible.classList.remove('d-navbar-recolor-b')
        } else {
            navbarCollapsible.classList.remove('d-navbar-recolor-a')
            navbarCollapsible.classList.add('d-navbar-recolor-b')
        }

    };

    // Shrink the navbar 
    navbarRecolor();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarRecolor);
});
