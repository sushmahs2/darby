document.addEventListener('DOMContentLoaded', function () {

    // menu button
    const menuButton = document.getElementById('menuButton2');
    const menu = document.getElementById('menu2');
  

    menuButton.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        document.body.style.overflow = (menu.style.display === 'block') ? 'hidden' : 'auto';
    });

    document.addEventListener('click', function (event) {
        if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
