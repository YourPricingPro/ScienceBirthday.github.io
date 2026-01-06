// ============================================
// STRANGER THINGS SCIENCE BIRTHDAY PARTY
// Interactive JavaScript
// ============================================

// ============================================
// PARTICLE SYSTEM
// ============================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        // Random animation duration
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function handleScrollAnimations() {
    const sections = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
// PARALLAX EFFECT
// ============================================

function setupParallax() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                const backgroundPattern = document.querySelector('.background-pattern');
                
                if (hero) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
                
                if (backgroundPattern) {
                    backgroundPattern.style.transform = `translateY(${scrolled * 0.2}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// ============================================
// HIDE SCROLL INDICATOR ON SCROLL
// ============================================

function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
}

// ============================================
// RANDOM FLICKER ENHANCEMENT
// ============================================

function enhanceFlickerEffect() {
    const flickerElements = document.querySelectorAll('.flicker');
    
    flickerElements.forEach(element => {
        setInterval(() => {
            if (Math.random() > 0.9) {
                element.style.opacity = '0.5';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 50);
            }
        }, 3000);
    });
}

// ============================================
// EMAIL PLACEHOLDER INTERACTION
// ============================================

function setupEmailInteraction() {
    const emailPlaceholder = document.querySelector('.email-placeholder');
    
    if (emailPlaceholder) {
        emailPlaceholder.addEventListener('click', () => {
            // Create a temporary input for copying
            const tempInput = document.createElement('input');
            tempInput.value = emailPlaceholder.textContent;
            document.body.appendChild(tempInput);
            tempInput.select();
            
            try {
                document.execCommand('copy');
                
                // Visual feedback
                const originalText = emailPlaceholder.textContent;
                emailPlaceholder.textContent = 'Copied!';
                emailPlaceholder.style.color = '#ffffff';
                
                setTimeout(() => {
                    emailPlaceholder.textContent = originalText;
                    emailPlaceholder.style.color = '';
                }, 1500);
            } catch (err) {
                console.log('Copy failed');
            }
            
            document.body.removeChild(tempInput);
        });
        
        // Add cursor pointer style
        emailPlaceholder.style.cursor = 'pointer';
        emailPlaceholder.title = 'Click to copy';
    }
}

// ============================================
// PREVENT ANIMATION FLICKERING ON LOAD
// ============================================

function preventInitialFlicker() {
    // Add a small delay before starting animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// ============================================
// INITIALIZE ALL FUNCTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    handleScrollAnimations();
    setupSmoothScroll();
    setupParallax();
    setupScrollIndicator();
    enhanceFlickerEffect();
    setupEmailInteraction();
    preventInitialFlicker();
    
    console.log('🔬 Science + Stranger Things = Ivan\'s Birthday Party! 🎂');
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Secret message
    const message = document.createElement('div');
    message.textContent = '🧪 Secret Unlocked: Ivan is going to have the best birthday ever! 🎉';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 0, 0, 0.95);
        color: white;
        padding: 2rem 3rem;
        border: 3px solid white;
        border-radius: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        z-index: 9999;
        box-shadow: 0 0 50px rgba(255, 0, 0, 0.8);
        animation: pulse 0.5s infinite;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 1s';
        setTimeout(() => message.remove(), 1000);
    }, 3000);
}