// Highlight active menu item
const currentLocation = window.location.pathname;
const menuItem = document.querySelectorAll('nav a');

menuItem.forEach(item => {
    if (item.pathname === currentLocation) {
        item.classList.add('active');
    }
});

// Fade-in scroll animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Scroll to Top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});
