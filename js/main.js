// ========================================
// SALEM BOOKSTORE KE - MAIN JAVASCRIPT
// ========================================

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }

  // Set active navigation link based on current page
  const currentLocation = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Newsletter Form Handler
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      alert('Thank you for subscribing! We will send updates to ' + email);
      this.reset();
    });
  }

  // Contact Form Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Validate form
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }

      // In production, this would send to a server
      alert('Thank you for your message, ' + name + '! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // WhatsApp Button Handler
  const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const phoneNumber = '+254712345678';
      const message = 'Hello Salem Bookstore KE! I would like to inquire about your services.';
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    });
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add animation to elements on scroll
  observeElements();
});

// Intersection Observer for scroll animations
function observeElements() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, options);

  const animatedElements = document.querySelectorAll('.product-card, .testimonial-card, .ministry-card, .news-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Product Search and Filter functionality
function initializeFilters() {
  const filterCheckboxes = document.querySelectorAll('.filter-option input');
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      applyFilters();
    });
  });
}

function applyFilters() {
  const selectedCategories = [];
  const selectedPrices = [];

  document.querySelectorAll('.filter-option input:checked').forEach(checkbox => {
    const value = checkbox.value;
    if (value.includes('price')) {
      selectedPrices.push(value);
    } else {
      selectedCategories.push(value);
    }
  });

  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    let shouldShow = true;

    if (selectedCategories.length > 0) {
      const category = card.getAttribute('data-category');
      shouldShow = selectedCategories.includes(category);
    }

    card.style.display = shouldShow ? 'block' : 'none';
  });
}

// Search functionality
function searchProducts(searchTerm) {
  const productCards = document.querySelectorAll('.product-card');
  const term = searchTerm.toLowerCase();

  productCards.forEach(card => {
    const title = card.getAttribute('data-title') || '';
    const description = card.textContent.toLowerCase();

    if (title.toLowerCase().includes(term) || description.includes(term)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initialize search input if present
const searchInput = document.getElementById('search-products');
if (searchInput) {
  searchInput.addEventListener('keyup', function() {
    searchProducts(this.value);
  });
}

// Initialize filters on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeFilters();
});

// Counter Animation for Statistics
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 50);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.ceil(current);
    }
  }, 50);
}

// Initialize counters when they come into view
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('[data-counter]');
  let hasStarted = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasStarted) {
        hasStarted = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-counter'));
          animateCounter(counter, target);
        });
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// Utility function to format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES'
  }).format(amount);
}

// Utility function to show toast notifications
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    border-radius: 0.5rem;
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Add to Cart functionality (if e-commerce features are added)
function addToCart(productId, productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: price,
      quantity: 1
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  showToast(`${productName} added to cart!`, 'success');
}

// Get cart items
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Clear cart
function clearCart() {
  localStorage.removeItem('cart');
  showToast('Cart cleared', 'info');
}
