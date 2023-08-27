// Function to toggle the "open" class and adjust the height of the menu
function toggleOpen(hamburger, menu) {
    hamburger.classList.toggle('open');
    menu.style.height = hamburger.classList.contains('open') ? '250px' : '0';
}

// Function to update element classes based on its scrolling and overflow state.
function setClasses(el) {
    const isScrollable = el.scrollHeight > el.clientHeight;
    
    // GUARD: If element is not scrollable, remove all classes
    if (!isScrollable) {
        el.classList.remove('is-bottom-overflowing', 'is-top-overflowing');
        return;
    }

    // Check if the user has scrolled to the bottom or top
    const isScrolledToBottom = el.scrollHeight <= el.clientHeight + el.scrollTop;
    const isScrolledToTop = el.scrollTop === 0;

    // Apply appropriate classes based on scroll position
    if (isScrolledToBottom) {
        el.classList.remove('is-bottom-overflowing');
        el.classList.add('is-top-overflowing');
    } else if (isScrolledToTop) {
        el.classList.remove('is-top-overflowing');
        el.classList.add('is-bottom-overflowing');
    } else {
        // If scrolling neither to top nor bottom, remove both classes
        el.classList.remove('is-bottom-overflowing', 'is-top-overflowing');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // SwiperJs initialization
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 40,
        centerSlide: "true",
        grabCursor: "true",
        fade: "true",

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Portfolio-items' p and ul
    const overflowingElements = document.querySelectorAll('.fade-overflow');

    overflowingElements.forEach(function(element) {
        element.addEventListener('scroll', function() {
            setClasses(this);
        });
        
        // Set initial classes for each overflowing element
        setClasses(element);
    });

    // Navigation bar
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        toggleOpen(this, menu);
    });

    menu.addEventListener('click', function(event) {
        // Check if the clicked element is a link inside the menu
        if (event.target.tagName === 'A') {
            toggleOpen(hamburger, this);
        }
    });
});