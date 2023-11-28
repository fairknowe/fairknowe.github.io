document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('menuToggle');
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', function () {
        console.log(`menu.style.display before: ${menu.style.display}`)
        console.log(`menu.style.zIndex before: ${menu.style.zIndex}`)
        console.log(`hamburger.style.display before: ${hamburger.style.display}`)
        console.log(`hamburger.style.zIndex before: ${hamburger.style.zIndex}`)
        // menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
            menu.style.zIndex = 1000; // A higher z-index when visible
        } else {
            menu.style.display = 'none';
            menu.style.zIndex = 100; // Reset to default z-index
        }

        // hamburger.style.display = menu.style.display === 'none' ? 'block' : 'none';
        if (hamburger.style.display === 'none') {
            hamburger.style.display = 'block';
            hamburger.style.zIndex = 1000; // A higher z-index when visible
        } else {
            hamburger.style.display = 'none';
            hamburger.style.zIndex = 100; // Reset to default z-index
        }
        console.log(`menu.style.display after: ${menu.style.display}`)
        console.log(`menu.style.zIndex after: ${menu.style.zIndex}`)
        console.log(`hamburger.style.display after: ${hamburger.style.display}`)
        console.log(`hamburger.style.zIndex after: ${hamburger.style.zIndex}`)
    });

    menu.addEventListener('click', function (event) {
        console.log('menu event:', event);
        console.log('menu event target:', event.target);
        event.stopPropagation(); // This prevents the click from bubbling up to the document
    });

    document.addEventListener('click', function (event) {
        console.log('document event:', event);
        // setTimeout(() => {
        const isClickInsideMenu = menu.contains(event.target);
        console.log(`isClickInsideMenu: ${isClickInsideMenu}`)
        const isClickOnButton = toggleButton.contains(event.target);
        console.log(`isClickOnButton: ${isClickOnButton}`)

        if (!isClickInsideMenu && !isClickOnButton && menu.style.display === 'block') {
            menu.style.display = 'none';
            hamburger.style.display = 'block';
        }
        // }, 100);
    });
});