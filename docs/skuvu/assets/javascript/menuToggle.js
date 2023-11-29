document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menuToggle');
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', function () {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
            menu.style.zIndex = 1000; // A higher z-index when visible
        } else {
            menu.style.display = 'none';
            menu.style.zIndex = 100; // Reset to default z-index
        }

        if (hamburger.style.display === 'none') {
            hamburger.style.display = 'block';
            hamburger.style.zIndex = 1000; // A higher z-index when visible
        } else {
            hamburger.style.display = 'none';
            hamburger.style.zIndex = 100; // Reset to default z-index
        }
    });

    menu.addEventListener('click', function (event) {
        event.stopPropagation(); // This prevents the click from bubbling up to the document
    });

    document.addEventListener('click', function (event) {
        // setTimeout(() => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnButton = toggleButton.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton && menu.style.display === 'block') {
            menu.style.display = 'none';
            hamburger.style.display = 'block';
        }
        // }, 100);
    });
});