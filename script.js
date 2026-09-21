// ===== Initialization =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize Intersection Observer for animations
    initScrollAnimations();
    
    // Initialize lazy loading for Google Maps
    initLazyMap();
});

// ===== Theme Toggle =====
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('svg');
    const savedTheme = localStorage.getItem('theme');
    
    // اگر تم ذخیره نشده یا روشن است، آیکون ماه نمایش داده شود
    if (!savedTheme || savedTheme === 'light') {
        // تم روشن است - آیکون ماه نمایش داده می‌شود
        document.body.classList.remove('dark-theme');
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    } else {
        // تم تاریک است - آیکون خورشید نمایش داده می‌شود
        document.body.classList.add('dark-theme');
        icon.innerHTML = '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a1.001 1.001 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a1.001 1.001 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>';
    }
}

function toggleTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('svg');
    
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        // تغییر به آیکون خورشید
        icon.innerHTML = '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a1.001 1.001 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a1.001 1.001 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>';
        localStorage.setItem('theme', 'dark');
    } else {
        // تغییر به آیکون ماه
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
        localStorage.setItem('theme', 'light');
    }
    
    // Add animation
    themeToggle.style.transform = 'scale(0.8) rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 300);
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Navigation items
    const navItems = document.querySelectorAll('.nav-item:not(.theme-toggle)');
    navItems.forEach((item) => {
        item.addEventListener('click', () => handleNavClick(item));
    });
    
    // FAB button
    const fabButton = document.querySelector('.fab-button');
    if (fabButton) {
        fabButton.addEventListener('click', handleFabClick);
    }
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => handleCardHover(e, true));
        card.addEventListener('mouseleave', (e) => handleCardHover(e, false));
        card.addEventListener('mousemove', (e) => handleCardMouseMove(e));
    });
}

// ===== Navigation Handler =====
function handleNavClick(item) {
    // Get target from data attribute
    const targetId = item.getAttribute('data-target');
    
    if (!targetId) return;
    
    // Find target element
    const target = document.getElementById(targetId);
    
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add professional attention animation
        target.classList.add('card-highlight');
        setTimeout(() => {
            target.classList.remove('card-highlight');
        }, 1500);
    }
    
    // Add ripple effect
    createRipple(item);
}

// ===== FAB Button Handler =====
function handleFabClick() {
    // Show contact options
    const contactCard = document.querySelector('.contact-card');
    if (contactCard) {
        contactCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add attention animation
        contactCard.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            contactCard.style.animation = '';
        }, 500);
    }
}

// ===== Card Hover Effects =====
function handleCardHover(e, isEntering) {
    const card = e.currentTarget;
    
    if (isEntering) {
        card.style.transition = 'transform 0.3s ease';
    }
}

function handleCardMouseMove(e) {
    // Removed 3D effect - too much movement
}

// ===== Ripple Effect =====
function createRipple(element) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Scroll Animations =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Update active nav based on scroll position
    updateActiveNav();
    
    // Parallax effect for decorations
    const decorations = document.querySelectorAll('.bg-decoration');
    decorations.forEach((decoration, index) => {
        const speed = (index + 1) * 0.5;
        decoration.style.transform = `translateY(${currentScroll * speed}px)`;
    });
    
    lastScroll = currentScroll;
});

function updateActiveNav() {
    // Navigation update logic removed - not needed anymore
}

// ===== Scroll Animations with Intersection Observer =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // توقف مشاهده بعد از نمایش
            }
        });
    }, observerOptions);

    // مشاهده تمام المان‌های fade-in-up
    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });
}

// ===== Lazy Load Google Maps =====
function initLazyMap() {
    const mapContainer = document.querySelector('.map-container');
    const mapPlaceholder = document.querySelector('.map-placeholder');
    
    if (!mapContainer || !mapPlaceholder) return;
    
    let mapLoaded = false;
    
    // تابع بارگذاری نقشه
    function loadMap() {
        if (mapLoaded) return;
        mapLoaded = true;
        
        const mapSrc = mapPlaceholder.getAttribute('data-map-src');
        mapContainer.setAttribute('data-map-loading', 'true');
        
        // ساخت iframe
        const iframe = document.createElement('iframe');
        iframe.src = mapSrc;
        iframe.style.border = '0';
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('title', 'موقعیت دارالقرآن حاج ملا علی عقیلی در نقشه');
        
        // بعد از بارگذاری iframe، حذف placeholder
        iframe.onload = function() {
            mapPlaceholder.style.opacity = '0';
            setTimeout(() => {
                mapPlaceholder.remove();
                mapContainer.setAttribute('data-map-loading', 'false');
            }, 300);
        };
        
        mapContainer.appendChild(iframe);
    }
    
    // بارگذاری با کلیک
    mapPlaceholder.addEventListener('click', loadMap);
    
    // بارگذاری خودکار وقتی کاربر به بخش نقشه رسید
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // تاخیر 500ms برای بهبود تجربه کاربری
                setTimeout(loadMap, 500);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: '50px'
    });
    
    observer.observe(mapContainer);
}

// ===== Cursor Trail Effect (Optional) =====
let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ===== Copy to Clipboard Function =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('کپی شد!');
    }).catch(err => {
        console.error('خطا در کپی کردن:', err);
    });
}

// ===== Notification System =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-weight: 500;
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(-100px)';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ===== Performance Optimization =====
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

// Apply debounce to scroll handler
window.addEventListener('scroll', debounce(() => {
    updateActiveNav();
}, 100));

// ===== Console Message =====
console.log('%c🕌 دارالقرآن حاج ملا علی عقیلی', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cطراحی و توسعه با ❤️', 'font-size: 14px; color: #8b5cf6;');
