# Salem Bookstore KE - Modern Faith-Centered Website

A comprehensive, modern, and welcoming website for Salem Bookstore KE, showcasing Christian resources, Bibles, devotionals, and educational materials across Kenya.

## Project Overview

Salem Bookstore KE's website is designed to be:
- **Faith-centered and warm** - Inspiring tone reflecting Christian values
- **Professionally welcoming** - Accessible to individuals, churches, schools, and ministries
- **Fully responsive** - Optimized for desktop, tablet, and mobile devices
- **Community-focused** - Emphasizing partnerships and spiritual service
- **Feature-rich** - Comprehensive product catalog with filtering and search

## Website Structure

### Directory Layout
```
salem-bookstore/
├── index.html              # Home page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── pages/
│   ├── about.html         # About Us page
│   ├── shop.html          # Shop/Products page
│   ├── ministry.html      # Ministry & Community partnerships
│   ├── resources.html     # Resources, blog, reading plans
│   ├── visit.html         # Visit Us / Store Locations
│   └── contact.html       # Contact page
└── assets/                # (For future images and media)
```

## Pages & Features

### 1. **Home Page** (index.html)
- Hero banner with mission statement
- Featured products showcase (6 categories)
- About Us section with core values
- Customer testimonials
- Latest news & promotions
- Newsletter subscription form
- Footer with social links

### 2. **About Us** (pages/about.html)
- Mission, vision, and core values
- Company history and founding story
- Why Choose Salem Bookstore KE section
- Commitment statement

### 3. **Shop** (pages/shop.html)
- Complete product catalog with 24+ items
- Product categories:
  - Bibles (4 types)
  - Christian Books (4 items)
  - Devotionals (4 items)
  - Gifts & Accessories (4 items)
  - Church Supplies (4 items)
  - Music & Media (4 items)
- Product filtering by category and price
- Search functionality
- Add to Cart capability (client-side)
- Product pricing in KES

### 4. **Ministry & Community** (pages/ministry.html)
- Church & ministry partnership programs
- Community initiatives
- Success stories from partners
- Upcoming events and conferences
- Partnership benefits and features

### 5. **Resources** (pages/resources.html)
- Blog articles and posts
- 6 Bible reading plans (downloadable)
- Daily devotional content
- Free downloadable materials (templates)
- Curated book recommendations

### 6. **Visit Us** (pages/visit.html)
- Main store location (Nairobi CBD)
- Additional locations (Mombasa, Kisumu, Nakuru)
- Store hours and contact details
- Embedded Google Maps
- What to expect when visiting
- Visiting tips
- Online shopping alternative

### 7. **Contact** (pages/contact.html)
- Contact form with validation
- Department-specific contact information
- FAQ section (8 questions)
- Department contacts
- Multiple contact methods
- Embedded Google Maps

## Design Elements

### Color Palette
- **Primary Blue**: #1e3a8a (trust and faith)
- **Secondary Purple**: #5b21b6 (spiritual depth)
- **Accent Gold**: #d4af37 (premium and richness)
- **White**: #ffffff (clean and modern)
- **Light Background**: #f9fafb (professionalism)
- **Text Dark**: #1f2937 (readability)

### Typography
- **Headings**: Georgia, Garamond (elegant serif)
- **Body Text**: Segoe UI, Tahoma, Geneva (clean sans-serif)

### Responsive Breakpoints
- Desktop: Full layout (1200px+)
- Tablet: 768px - 1199px
- Mobile: < 768px

## Key Features

### Interactive Elements
1. **Mobile Navigation Toggle** - Hamburger menu for mobile devices
2. **Product Filtering** - Filter by category and price range
3. **Search Functionality** - Real-time product search
4. **Add to Cart** - Client-side cart management using localStorage
5. **Newsletter Subscription** - Email capture form
6. **Contact Form** - Message submission with validation
7. **Social Media Links** - Facebook, Twitter, Instagram, WhatsApp
8. **Smooth Scrolling** - Anchor link navigation

### Shopping Features
- 24+ products across 6 categories
- Price display in Kenyan Shilling (KES)
- Multiple payment options mentioned (M-Pesa, cards, cash)
- Bulk discount information for institutions
- Special pricing for churches and ministries

### Integration Points
- **WhatsApp Integration** - Direct messaging links (254712345678)
- **Google Maps** - Embedded location maps
- **Payment Methods** - M-Pesa, credit cards, direct transfer ready
- **Newsletter** - Email subscription capability
- **Social Media** - Links to Facebook, Twitter, Instagram

## How to Use the Website

### Viewing the Website
1. Open `index.html` in a modern web browser
2. All pages are properly linked in the navigation menu
3. Test responsive design by resizing browser window or using device emulation

### Navigation Menu
- **Home** - Returns to main page
- **About** - Church history and values
- **Shop** - Browse and filter products
- **Ministry** - Partnership programs
- **Resources** - Blog, reading plans, downloadable content
- **Visit Us** - Store locations and hours
- **Contact** - Get in touch with various departments

### Features to Test
1. Mobile menu toggle on small screens
2. Product filtering by category
3. Product search functionality
4. Newsletter subscription form
5. Contact form validation
6. WhatsApp links
7. Social media links
8. Responsive layout at different screen sizes

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Future Enhancements

Potential additions for future development:
1. **E-commerce Integration** - Complete shopping cart and payment gateway
2. **Backend Database** - Product inventory management
3. **Blog System** - Dynamic blog post creation
4. **User Accounts** - Customer registration and login
5. **Order Tracking** - Real-time order status
6. **Admin Panel** - Content and product management
7. **Multi-language Support** - Swahili and other local languages
8. **Email Marketing** - Newsletter automation
9. **Testimonial Management** - Dynamic review system
10. **Event Calendar** - Integrated event scheduling

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (Vanilla)** - No external dependencies
- **localStorage** - Client-side cart storage
- **Google Maps API** - Location embedding
- **Responsive Design** - Mobile-first approach

## File Sizes & Performance
- Lightweight HTML files (minimal bloat)
- Single consolidated CSS file (minimal HTTP requests)
- Single JavaScript file for all interactivity
- No external JavaScript frameworks (fast loading)
- Optimized for quick page load times

## Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- Alt attributes ready for images
- Keyboard navigation support
- High contrast colors for readability
- Form labels properly associated
- ARIA-friendly markup

## Installation & Deployment

### Local Testing
1. Extract files to a directory
2. Open `index.html` in a web browser
3. No server or build process required

### Deployment
1. Upload all files to web hosting
2. Ensure directory structure is preserved
3. Test all links after upload
4. Configure WhatsApp and email links as needed
5. Update phone numbers and addresses as needed

## Customization Guide

### Colors
Edit CSS variables in `css/style.css` :root section:
```css
:root {
  --primary-blue: #1e3a8a;
  --secondary-purple: #5b21b6;
  --accent-gold: #d4af37;
  /* etc */
}
```

### Contact Information
Update in footer and contact pages:
- Phone: +254 712 345 678
- Email: info@salembookstore.ke
- Address: 123 Bible Street, Nairobi

### Store Hours
Modify in all footer sections and visit.html

### Products
Add/edit in `pages/shop.html` product cards section

## Support & Maintenance

### Regular Updates Needed
- Product catalog (add/remove/update items)
- Store location changes
- Contact information updates
- News and promotions
- Event scheduling
- Blog content

### Performance Optimization
- Consider image optimization when adding media
- Minimize CSS/JS if needed for larger sites
- Implement lazy loading for images
- Consider CDN for faster delivery

## License & Attribution

This website was designed for Salem Bookstore KE to provide a modern, faith-centered platform for Christian resource distribution across Kenya.

---

**Created**: February 2026
**Website**: salembookstore.ke
**Location**: Nairobi, Kenya
**Mission**: Serving believers with God's Word and Christian resources
