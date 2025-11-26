# Dar El Salam Travel - React Frontend Clone

A production-ready, fully responsive frontend clone of https://dstworldtravel.com built with React, Vite, and TailwindCSS.

## 🚀 Features

- **Fully Responsive Design**: Mobile-first approach with optimized breakpoints for all devices
- **Modern Component Architecture**: Modular, reusable components built with React
- **TailwindCSS Styling**: Utility-first CSS framework for rapid development
- **React Router Navigation**: Client-side routing with smooth page transitions
- **Interactive Components**: 
  - Sticky navigation with mobile hamburger menu
  - Image carousels with testimonials
  - Filterable package grid with sorting
  - Functional contact form with validation
  - Hover effects and smooth transitions
- **Pixel-Perfect Design**: Matches original website's layout and styling
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance Optimized**: Fast load times with lazy loading support

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── Header.jsx          # Navigation bar with mobile support
│   ├── Footer.jsx          # Footer with links and social icons
│   ├── Hero.jsx            # Hero section with background image
│   ├── TourCard.jsx        # Individual package card component
│   ├── PackageList.jsx     # Grid with filtering and sorting
│   ├── WhyChooseUs.jsx     # Features section
│   ├── Testimonials.jsx    # Carousel with customer reviews
│   ├── AboutSection.jsx    # Company information
│   ├── ContactForm.jsx     # Email contact form
│   └── CTASection.jsx      # Call-to-action section
├── pages/                   # Page components
│   ├── Home.jsx            # Homepage
│   ├── Tours.jsx           # All packages page
│   ├── TourDetail.jsx      # Single package details
│   ├── About.jsx           # About company page
│   ├── Contact.jsx         # Contact page
│   ├── Hajj.jsx            # Hajj packages page
│   ├── Umrah.jsx           # Umrah packages page
│   ├── Privacy.jsx         # Privacy policy page
│   └── Terms.jsx           # Terms & conditions page
├── data/
│   └── packages.js         # Dummy data for packages
├── assets/
│   └── images/             # Image assets
├── App.jsx                 # Main app component with routing
├── App.css                 # App-level styles
├── index.css               # Global styles with TailwindCSS directives
└── main.jsx                # React entry point

```

## 🛠 Tech Stack

- **React 19.2** - UI library
- **Vite 7.2** - Build tool and dev server
- **TailwindCSS 4.1** - Utility-first CSS framework
- **React Router DOM 7.9** - Client-side routing
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Quick Start

1. **Navigate to project directory:**
```bash
cd "c:\Users\Palash\Desktop\DAR EI SALAM"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Component Documentation

### Header Component
- Sticky navigation on scroll
- Logo with text branding
- Desktop navigation menu
- Mobile hamburger menu with slide-down animation
- Responsive design

**Features:**
- Smooth scroll behavior
- Active state awareness
- Mobile-responsive breakpoints
- Touch-friendly buttons

### TourCard Component
Props:
- `id` - Package ID
- `title` - Package name
- `description` - Short description
- `price` - Price per person
- `duration` - Trip duration
- `location` - Destination
- `image` - Card image URL
- `badge` - Featured badge text (optional)
- `category` - Package category

**Features:**
- Hover zoom effect on image
- Icon display for details
- Category and featured badges
- Smooth transitions

### PackageList Component
Features:
- Grid layout (responsive: 1 col on mobile, 2-3 on larger screens)
- Category filtering with pill buttons
- Price sorting dropdown
- Result count display
- Hover animations and shadow effects

### ContactForm Component
Features:
- Real-time form validation
- Error messages with visual feedback
- Success/error notifications
- Disable button during submission
- Fields: email, name, phone, subject, message

### Hero Component
Props:
- `title` - Main heading
- `subtitle` - Subheading text
- `backgroundImage` - Background image URL
- `ctaText` - Button text
- `ctaLink` - Button destination
- `height` - Container height (Tailwind class)
- `showScrollIndicator` - Toggle scroll indicator

## 🎯 Pages Overview

### Home Page (`/`)
- Hero section with CTA buttons
- Featured packages grid (6 packages)
- Why Choose Us section with 6 feature cards
- About section with company highlights
- Testimonials carousel with 4 reviews
- Final CTA section

### Tours Page (`/tours`)
- Hero banner with page title
- Full package list with filtering
- Category and price sorting
- Responsive 3-column grid
- 8 total packages available

### Tour Detail Page (`/tour/:id`)
- Large package image with overlay
- Quick info cards (price, duration, location, category)
- Full description text
- Numbered itinerary (6-10 steps)
- Two-column layout for includes/excludes
- Sidebar with pricing and booking options
- Contact information and FAQ

### About Page (`/about`)
- Company story section
- Mission, Vision, Values cards
- Statistics counters
- Services overview grid
- CTA section

### Contact Page (`/contact`)
- Two-column layout (info + form)
- Contact information cards
- Functional contact form
- Location highlight cards
- FAQ section with 6 collapsible items

### Additional Pages
- `/hajj` - Hajj packages placeholder
- `/umrah` - Umrah packages placeholder
- `/privacy` - Privacy policy
- `/terms` - Terms & conditions

## 🎨 Styling & Customization

### TailwindCSS Configuration
Located in `tailwind.config.js`:
- Extended color palette with custom blue and gold
- Custom animations (fadeIn, slideUp, slideDown)
- Extended spacing utilities
- Responsive breakpoints

### Custom Utility Classes
In `index.css`:
- `.btn-primary` - Blue CTA button
- `.btn-secondary` - Gray button
- `.btn-outline` - Outline variant
- `.card` - Rounded card with shadow
- `.container-custom` - Max-width container
- `.section-heading` - Large section titles
- `.section-subheading` - Subtitle text

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px (sm)
- **Desktop**: 1024px - 1279px (md, lg)
- **Large Desktop**: 1280px+ (xl)

**Responsive Features:**
- Text scales across devices
- Grid columns adapt per breakpoint
- Navigation changes to hamburger on mobile
- Touch-friendly button sizes
- Optimized spacing and padding

## 🔄 Routing Structure

```
/                    - Home page (featured packages, testimonials)
/tours              - All packages with filters
/tour/:id           - Individual package details
/about              - About company, mission, values
/contact            - Contact form and FAQ
/hajj               - Hajj-specific packages
/umrah              - Umrah-specific packages
/privacy            - Privacy policy
/terms              - Terms & conditions
*                   - Fallback to home
```

## 💾 Dummy Data

Located in `src/data/packages.js`:
- **8 total packages**:
  - 3 Hajj packages ($5999-$8999)
  - 2 Umrah packages ($1499-$3299)
  - 3 International tours ($2199-$2899)

Each package includes:
- Title and description
- Price, duration, location
- Category and optional badge
- Full itinerary (5-10 items)
- Includes and excludes lists
- Unsplash image URLs

### Adding More Packages

Edit `src/data/packages.js`:
```javascript
{
  id: 9,
  title: "New Package",
  description: "Package description",
  price: 2999,
  duration: "10 Days",
  location: "Destination",
  category: "Category",
  image: "https://images.unsplash.com/...",
  itinerary: [...],
  includes: [...],
  excludes: [...]
}
```

## 🚀 Performance Optimization

- **Image Optimization**: Uses Unsplash CDN for image delivery
- **Code Splitting**: React Router enables automatic code splitting
- **CSS Purging**: TailwindCSS only includes used styles
- **Fast Refresh**: HMR for instant development feedback
- **Efficient Layouts**: CSS Grid and Flexbox minimize reflows

## 🔒 Security Considerations

- All external links open in new tabs with `rel="noopener noreferrer"`
- Form validation prevents injection attacks
- No sensitive data stored in frontend
- Email links are properly obfuscated
- HTTPS recommended for deployment

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## 🎯 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* blue palette */ },
  gold: { /* accent palette */ }
}
```

### Modify Package Data
Edit `src/data/packages.js` to update prices, durations, itineraries.

### Update Contact Info
Search for these in components:
- `1-866-327-7252` (phone)
- `info@darelsalam.com` (email)

### Customize Text
All text is in JSX - easily searchable and editable.

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build size too large
Check for unused dependencies in `package.json`

### Styling not working
Ensure TailwindCSS is properly initialized and postcss.config.js exists

## 📞 Contact & Support

**Dar El Salam Travel:**
- Phone: 1-866-327-7252
- Email: info@darelsalam.com
- Website: https://dstworldtravel.com

## 📜 License

This project is a demonstration/educational clone for learning purposes.

---

**Last Updated**: November 2025
**Built with**: React 19.2, Vite 7.2, TailwindCSS 4.1
**Status**: Production Ready ✅
