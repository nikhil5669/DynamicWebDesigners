// Preloader functionality
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Smooth Scrolling Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Circle Background
function createCircles() {
    const circleCount = 10;
    const dynamicBg = document.querySelector('.dynamic-bg');

    for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle', `circle-${i + 1}`);
        dynamicBg.appendChild(circle);
    }
}

// Initialize circles on load
window.onload = function () {
    createCircles();
    setInterval(() => {
        const circles = document.querySelectorAll('.circle');
        circles.forEach(circle => {
            circle.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        });
    }, 2000);
};

// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Auto slide every 5 seconds

    // Slider buttons
    const nextButton = document.querySelector('button.next');
    const prevButton = document.querySelector('button.prev');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form validation (for example contact form)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset(); // Reset form fields
});

// Responsive navbar toggle for small screens
const navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', () => {
    const navbarNav = document.querySelector('.navbar-nav');
    navbarNav.classList.toggle('show');
});

// Close navbar on link click
const navbarLinks = document.querySelectorAll('.nav-link');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarNav = document.querySelector('.navbar-nav');
        navbarNav.classList.remove('show'); // Close navbar on link click
    });
});

// Handling window resize for navbar
window.addEventListener('resize', () => {
    const navbarNav = document.querySelector('.navbar-nav');
    if (window.innerWidth > 992) {
        navbarNav.classList.remove('show'); // Remove show class on larger screens
    }
});

// Light/Dark Mode Switch
const modeSwitch = document.querySelector('.mode-switch');

modeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    modeSwitch.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Highlighting new features
const featureHighlights = document.querySelectorAll('.feature-highlight');

featureHighlights.forEach((feature) => {
    feature.addEventListener('mouseenter', () => {
        feature.style.backgroundColor = 'rgba(255, 255, 0, 0.5)'; // Highlight on hover
    });

    feature.addEventListener('mouseleave', () => {
        feature.style.backgroundColor = 'rgba(255, 255, 0, 0.2)'; // Reset background
    });
});

// Event listener for card flip
const cardFlips = document.querySelectorAll('.card-flip');

cardFlips.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped'); // Toggle the flip class
    });
});

// Close modal functionality
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.close');

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Open modal functionality
const modalOpen = document.querySelector('.modal-open');

modalOpen.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
