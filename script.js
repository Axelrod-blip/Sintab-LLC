// Кэшированные DOM элементы для лучшей производительности
const DOM = {
    navLinks: null,
    mobileToggle: null,
    quoteForm: null,
    header: null
};

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    // Кэшируем часто используемые элементы
    DOM.navLinks = document.querySelector('.nav-links');
    DOM.mobileToggle = document.querySelector('.mobile-menu-toggle');
    DOM.quoteForm = document.getElementById('quoteForm');
    DOM.header = document.querySelector('.main-header');
    
    // Initialize all functionality
    initSmoothScrolling();
    initScrollAnimations();
    initMobileMenu();
    initFormValidation();
    // initFormTypeSwitcher(); // Removed - not needed
});

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 70; // Account for sticky header
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Simplified Scroll Animations for Corporate Style
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements and observe them - более консервативный подход
    const elementsToAnimate = document.querySelectorAll('.service-card, .story-text, .story-image, .testimonial-card');
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    if (DOM.mobileToggle) {
        DOM.mobileToggle.addEventListener('click', function() {
            const isExpanded = DOM.navLinks.classList.contains('active');
            DOM.navLinks.classList.toggle('active');
            this.classList.toggle('active');
            
            // Update ARIA attributes for accessibility
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            DOM.navLinks.classList.remove('active');
            DOM.mobileToggle.classList.remove('active');
        });
    });
}

// Enhanced Form Validation for Professional Use
function initFormValidation() {
    if (DOM.quoteForm) {
        DOM.quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Form is valid, show professional success message
                showSuccessMessage();
                // In a real implementation, you would send the data to a server
                // submitFormData();
            }
        });
        
        // Real-time validation with professional styling
        const inputs = DOM.quoteForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearErrors(this);
            });
        });
    }
}

// Removed unused form type switcher function - not needed for current form

// Enhanced Field Validation for Business Use
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error
    clearErrors(field);
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = `${getFieldLabel(field)} is required.`;
    }
    
    // Enhanced validation rules for business context
    if (value) {
        switch (fieldName) {
            case 'email':
                if (!isValidBusinessEmail(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid business email address.';
                }
                break;
            case 'phone':
                if (!isValidBusinessPhone(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid business phone number.';
                }
                break;
            case 'name':
                if (value.length < 2 || !isValidName(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid full name.';
                }
                break;
            case 'company':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Please enter your company name.';
                }
                break;

        }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

// Validate Entire Form
function validateForm() {
    const form = document.getElementById('quoteForm');
    
    // Check honeypot field for spam protection
    const honeypot = form.querySelector('input[name="honeypot"]');
    if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Spam detected - honeypot field filled');
        return false;
    }
    
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isFormValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    // Additional rate limiting check
    if (isFormValid && !checkSubmissionRate()) {
        showFieldError(form.querySelector('button[type="submit"]'), 'Please wait before submitting another request.');
        return false;
    }
    
    return isFormValid;
}

// Simple rate limiting to prevent spam submissions
let lastSubmissionTime = 0;
function checkSubmissionRate() {
    const currentTime = Date.now();
    const timeDiff = currentTime - lastSubmissionTime;
    const minInterval = 30000; // 30 seconds minimum between submissions
    
    if (timeDiff < minInterval) {
        return false;
    }
    
    lastSubmissionTime = currentTime;
    return true;
}

// Enhanced Helper Functions for Business Context
function isValidBusinessEmail(email) {
    // Sanitize input
    email = email.trim().toLowerCase();
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Additional security checks
    if (email.includes('<') || email.includes('>') || email.includes('"') || email.includes("'")) {
        return false;
    }
    
    return emailRegex.test(email) && email.includes('.') && !email.includes('..');
}

function isValidBusinessPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)\.]{8,}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
    return phoneRegex.test(phone) && cleanPhone.length >= 10 && cleanPhone.length <= 15;
}

function isValidName(name) {
    // Sanitize and security check
    name = name.trim();
    
    // Check for potential XSS patterns
    if (name.includes('<') || name.includes('>') || name.includes('"') || name.includes("'") || name.includes('&')) {
        return false;
    }
    
    const nameRegex = /^[a-zA-Z\s\-\'\.]+$/;
    return nameRegex.test(name) && name.includes(' ') && name.length <= 100; // Expecting full name with length limit
}

function getFieldLabel(field) {
    const label = field.parentElement.querySelector('label');
    return label ? label.textContent.replace('*', '').trim() : field.name;
}

function showFieldError(field, message) {
    const formGroup = field.parentElement;
    const existingError = formGroup.querySelector('.error-message');
    
    if (existingError) {
        existingError.remove();
    }
    
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#dc3545';
    errorElement.style.fontSize = '13px';
    errorElement.style.marginTop = '5px';
    errorElement.style.fontWeight = '500';
    
    formGroup.appendChild(errorElement);
    field.style.borderColor = '#dc3545';
    field.style.borderWidth = '2px';
}

function clearErrors(field) {
    const formGroup = field.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    field.style.borderColor = '#dee2e6';
    field.style.borderWidth = '1px';
}

function showSuccessMessage() {
    const form = document.getElementById('quoteForm');
    const successMessage = document.createElement('div');
    
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div style="background-color: #d4edda; color: #155724; padding: 25px; border-radius: 6px; margin-bottom: 25px; text-align: center; border: 1px solid #c3e6cb;">
            <h3 style="margin: 0 0 10px 0; font-family: Georgia, serif;">Quote Request Submitted Successfully</h3>
            <p style="margin: 0; font-size: 15px;">Thank you for contacting Sintab LLC. Our team will review your requirements and respond within 24 hours with a comprehensive quote.</p>
        </div>
    `;
    
    form.parentElement.insertBefore(successMessage, form);
    
    // Clear form
    form.reset();
    
    // Remove success message after 12 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 12000);
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Simplified Header Scroll Effect for Corporate Style
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events with conservative timing
window.addEventListener('scroll', throttle(function() {
    // Additional scroll-based functionality can be added here
    // Keeping minimal for professional appearance
}, 150));

// Enhanced error handling for professional reliability
window.addEventListener('error', function(e) {
    // Only log errors in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.error('Page error:', e.error);
    }
    // In production, could send error reports to monitoring service
    
    // Show user-friendly error message for critical errors
    if (e.error && e.error.message && !e.error.message.includes('Script error')) {
        showErrorNotification('An unexpected error occurred. Please refresh the page and try again.');
    }
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Prevent the default browser error handling
    e.preventDefault();
});

// User-friendly error notification function
function showErrorNotification(message) {
    // Remove existing error notifications
    const existingError = document.querySelector('.error-notification');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-notification';
    errorDiv.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; background: #dc3545; color: white; padding: 15px 20px; border-radius: 6px; z-index: 10000; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <strong>Notice:</strong> ${message}
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; font-weight: bold; float: right; cursor: pointer; margin-left: 10px;">&times;</button>
        </div>
    `;
    
    document.body.appendChild(errorDiv);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (errorDiv.parentElement) {
            errorDiv.remove();
        }
    }, 8000);
}

// Enhanced keyboard accessibility
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            mobileToggle.focus();
        }
    }
    
    // Enter/Space to activate mobile menu toggle
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('mobile-menu-toggle')) {
        e.preventDefault();
        e.target.click();
    }
    
    // Improved tab navigation trap for mobile menu
    if (e.key === 'Tab' && document.querySelector('.nav-links.active')) {
        const mobileMenu = document.querySelector('.nav-links.active');
        const focusableElements = mobileMenu.querySelectorAll('a[href]');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
}); 