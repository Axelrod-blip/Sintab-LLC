# Sintab LLC Landing Page

A professional, high-converting landing page for Sintab LLC freight brokerage company.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Lead Generation Form** - Complete quote request form with validation
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Fast loading with efficient code

## 📋 Setup Instructions

### 1. Images Required

To complete the setup, you need to add the following images to the `images/` folder:

#### Required Images:
- **founder-portrait.jpg** (400x400px recommended)
  - Professional portrait of the founder
  - Good lighting, approachable but professional
  - Consider a setting like a truck yard or office

- **team-photo.jpg** (500x400px recommended)
  - Team photo showing the Sintab LLC staff
  - Professional group photo
  - Can be in office or warehouse setting

#### Optional Hero Background:
- You can replace the CSS gradient background with a hero image
- Edit `style.css` line 161 to add: `background-image: url('images/hero-truck.jpg');`
- Recommended: High-resolution truck on highway image (1920x1080px)

### 2. Contact Information

Update the contact information in `index.html`:
- Line 150: Update phone number in `href="tel:+1234567890"`
- Line 151: Update email in `href="mailto:info@sintab.com"`
- Line 150: Update displayed phone number
- Line 151: Update displayed email

### 3. Customization Options

#### Colors (in `style.css`):
```css
:root {
    --primary-color: #0A2F5B; /* Deep Navy */
    --accent-color: #16A085; /* Deep green/teal */
    /* Modify these to match your brand colors */
}
```

#### Content:
- Update company-specific details in `index.html`
- Modify testimonials and quotes
- Adjust service descriptions
- Update footer information

### 4. Form Handling

The quote form currently shows a success message. To connect it to your backend:

1. Modify `script.js` line 85 to uncomment `submitFormData()`
2. Add your form submission logic
3. Consider services like Formspree, Netlify Forms, or custom backend

## 🛠️ Technical Details

### File Structure:
```
Landing/
├── index.html      # Main HTML file
├── style.css       # All styling
├── script.js       # JavaScript functionality
├── images/         # Image assets
└── README.md       # This file
```

### Browser Support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features:
- Optimized CSS with variables
- Throttled scroll events
- Efficient animations
- Compressed images (when added)

## 🎨 Design Principles

This landing page follows these core principles:
- **Trust Building** - Professional design with personal touches
- **Driver-First** - Messaging that resonates with truckers
- **Clear CTAs** - Prominent "Get a Quote" buttons
- **Social Proof** - Testimonials and trust badges
- **Mobile First** - Responsive design for all devices

## 📱 Testing

### Desktop Testing:
1. Open `index.html` in your browser
2. Test all navigation links
3. Fill out and submit the quote form
4. Verify responsive design by resizing window

### Mobile Testing:
1. Test on actual mobile devices
2. Verify mobile menu functionality
3. Test form submission on mobile
4. Check touch targets and readability

## 🔧 Customization Guide

### Adding New Sections:
1. Add HTML structure
2. Add corresponding CSS styles
3. Update navigation if needed
4. Add animations in `script.js`

### Modifying Animations:
- Fade-in animations controlled in `script.js`
- CSS transitions defined in `style.css`
- Intersection Observer for scroll triggers

### SEO Optimization:
- Meta description is set
- Proper heading hierarchy (H1, H2, H3)
- Semantic HTML structure
- Alt tags for images (add when uploading)

## 📞 Support

For technical support or customization help, refer to the code comments or contact your developer.

---

**Built with:** HTML5, CSS3, Vanilla JavaScript  
**Optimized for:** Lead generation and conversion  
**Mobile Ready:** Yes  
**SEO Ready:** Yes 