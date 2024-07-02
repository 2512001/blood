window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get the current scroll position
    const viewportHeight = window.innerHeight; // Get the viewport height

    const ninetyPercentViewportHeight = viewportHeight * 0.8; // Calculate 90% of the viewport height

    if (scrollPosition >= ninetyPercentViewportHeight) {
     let navbar = document.getElementById('navbar');
     navbar.classList.add('scrolled');
    }
    else{
        let navbar = document.getElementById('navbar');
        navbar.classList.remove('scrolled');
    }
});
