// Function to toggle the "open" class and adjust the height of the menu
function toggleOpen(hamburger, menu) {
    hamburger.classList.toggle('open');
    menu.style.height = hamburger.classList.contains('open') ? '250px' : '0';
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger and menu elements
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    // Attach a click event listener to the hamburger element
    hamburger.addEventListener('click', function() {
        toggleOpen(this, menu);
    });

    // Attach a click event listener to the menu element
    menu.addEventListener('click', function(event) {
        // Check if the clicked element is a link inside the menu
        if (event.target.tagName === 'A') {
            toggleOpen(hamburger, this);
        }
    });
});