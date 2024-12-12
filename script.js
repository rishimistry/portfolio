// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animate skill progress bars when in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-progress') + '%';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(progress => {
    observer.observe(progress);
});

// Typing animation for hero text
const text = "Information Technology Student";
let index = 0;
const typingSpeed = 100;

function typeText() {
    if (index < text.length) {
        document.querySelector('.typed-text').textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeText);

// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader-wrapper');
    const progressText = document.querySelector('.loading-progress');
    let progress = 0;
    
    // Simulate loading progress with faster intervals
    const interval = setInterval(() => {
        progress += Math.random() * 45; // Increased increment
        if (progress > 100) progress = 100;
        
        progressText.textContent = `${Math.round(progress)}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('fade-out');
                // Enable scrolling after loader is hidden
                document.body.style.overflow = 'visible';
            }, 300); // Reduced delay from 500ms to 300ms
        }
    }, 200); // Reduced interval from 500ms to 200ms
});

// Prevent scrolling while loading
document.body.style.overflow = 'hidden';
