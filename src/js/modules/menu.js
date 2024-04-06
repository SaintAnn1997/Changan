const menu = () => {

    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.header__menu-list');
    const menuItem = document.querySelectorAll('.header__menu-list li');
    
    function toggleMenu() {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('header__menu-list--active');
    
        if (menu.classList.contains('header__menu-list--active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }
    
    function close() {
        hamburger.classList.remove('hamburger--active');
        menu.classList.remove('header__menu-list--active');
        document.body.style.overflow = 'unset';
    }
    
    hamburger.addEventListener('click', toggleMenu);
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            toggleMenu();
            close();
        });
    });

};

export default menu;