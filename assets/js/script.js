// Function to toggle the "open" class and adjust the height of the menu
function toggleOpen(hamburger, menu) {
    hamburger.classList.toggle('open');
    menu.style.height = hamburger.classList.contains('open') ? '250px' : '0';
}

document.addEventListener('DOMContentLoaded', function() {
    /*
    //const wrapper = document.querySelector(".slider-container");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".portfolio-item").offsetWidth;
    const arrowBtns = document.querySelectorAll(".slider-container i");
    //const carouselChildrens = [...carousel.children];

    let isDragging = false;

    const updateButtonVisibility = () => {
        const isAtFirstElement = carousel.scrollLeft === 0;
        const isAtLastElement = Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth;

        arrowBtns[0].style.display = isAtFirstElement ? "none" : "absolute";
        arrowBtns[1].style.display = isAtLastElement ? "none" : "absolute";
    };

    // Dragging of the cards
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        updateButtonVisibility();
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
        updateButtonVisibility();
    }

    updateButtonVisibility(); // Set initial button visibility

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            updateButtonVisibility(); // Update visibility before scrolling
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
            updateButtonVisibility(); // Update visibility after scrolling
        });
    });


    /*isAutoPlay = true, startX, startScrollLeft, timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");*/

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    /*arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    // Dragging of the cards
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }*/

    /*const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();*/

    //carousel.addEventListener("mousedown", dragStart);
    //carousel.addEventListener("mousemove", dragging);
    //document.addEventListener("mouseup", dragStop);
    //carousel.addEventListener("scroll", infiniteScroll);
    //wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    //wrapper.addEventListener("mouseleave", autoPlay);

    /*const updateButtonVisibility = () => {
        const isAtFirstElement = carousel.scrollLeft === 0;
        const isAtLastElement = Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth;

        if (isAtFirstElement) {
            arrowBtns[0].style.display = "none"; // Hide left button
            arrowBtns[1].style.display = "block"; // Show right button
        } else if (isAtLastElement) {
            arrowBtns[0].style.display = "block"; // Show left button
            arrowBtns[1].style.display = "none"; // Hide right button
        } else {
            arrowBtns.forEach(btn => {
                btn.style.display = "block"; // Show both buttons
            });
        }
    };

    carousel.addEventListener("mousedown", () => {
        isDragging = true;
    });

    carousel.addEventListener("mousemove", () => {
        if (isDragging) {
            updateButtonVisibility();
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        updateButtonVisibility();
    });

    carousel.addEventListener("scroll", updateButtonVisibility);*/

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        //direction: 'vertical',
        //loop: true,
      
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            
        },
      
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        //scrollbar: {
        //  el: '.swiper-scrollbar',
        //},
    });
      

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