# 🚀 Mohamad Danish - Portfolio Website

A modern, responsive portfolio website built with **React** and **Tailwind CSS**, showcasing your full-stack development skills, projects, and achievements.

## 📋 Features

✅ **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
✅ **Modern UI** - Clean, professional design with smooth animations
✅ **Fast Performance** - Optimized with Vite for blazing-fast load times
✅ **Dark Theme** - Eye-friendly dark mode with accent colors
✅ **Smooth Navigation** - Fixed navbar with smooth scroll behavior
✅ **Multiple Sections** - Home, About, Skills, Projects, Achievements, Contact
✅ **Contact Form** - Fully functional contact form for inquiries
✅ **Social Links** - Integrated social media and contact links

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.6
- **Styling:** Tailwind CSS 3.4.19
- **Build Tool:** Vite 8.0.12
- **Icons:** Using Unicode emojis (no external icon library needed)

## 📝 Project Structure

```
frontend/
├── src/
│   ├── components/
│   ├── App.jsx                 # Main App component
│   ├── Navbar.jsx              # Navigation component
│   ├── Hero.jsx                # Hero/Landing section
│   ├── About.jsx               # About me section
│   ├── Skills.jsx              # Technical skills section
│   ├── Projects.jsx            # Projects showcase
│   ├── Achievements.jsx        # Achievements & awards
│   ├── Contact.jsx             # Contact form & info
│   ├── Footer.jsx              # Footer component
│   ├── App.css                 # Global styles
│   ├── index.css               # Tailwind imports
│   └── main.jsx                # React entry point
├── index.html                  # HTML template
├── package.json                # Dependencies
└── tailwind.config.js          # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build

# Preview production build
npm run preview
```

## ✏️ Customization Guide

### 1. **Add Your Links**

Search for comments marked with `// paste ur link` in these files:

#### Hero.jsx (Line ~25)
```javascript
// paste ur github link
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
```
Replace with your actual GitHub profile URL

#### Hero.jsx (Line ~29)
```javascript
// paste ur linkedin link
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
```
Replace with your actual LinkedIn profile URL

#### Projects.jsx
- Line ~24: ClinicManager GitHub link
- Line ~26: ClinicManager Demo link
- Line ~36: FactChecker GitHub link
- Line ~38: FactChecker Demo link
- Line ~50: CyberTech GitHub link
- Line ~52: CyberTech Demo link

#### Achievements.jsx (Line ~36)
```javascript
// paste ur drive link for mcp certificate
link: 'https://drive.google.com'
```
Replace with your Google Drive certificate link

#### Contact.jsx
- Line ~53: GitHub link
- Line ~58: LinkedIn link

#### Footer.jsx
- Line ~36: GitHub link
- Line ~41: LinkedIn link

### 2. **Update Personal Information**

The following information is already populated from your resume:
- Name: Mohamad Danish Irshad Ahamad Bagwan
- Email: danishbagwan88@gmail.com
- Phone: +91 8237991286
- Location: Kolhapur, Maharashtra

To modify any of this, search for the specific information in relevant component files.

### 3. **Modify Colors & Theme**

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Dark background
      secondary: '#1e293b',    // Secondary background
      accent: '#3b82f6',       // Blue accent color
    },
  },
}
```

### 4. **Update Meta Information**

Edit `index.html` to customize:
- Page title
- Meta description
- Keywords

## 📧 Contact Form Integration (Optional)

The contact form is currently a frontend-only form. To make it fully functional, you can integrate with:

1. **EmailJS** - Easy email service without backend
2. **Formspree** - Form submission service
3. **Your own backend** - Custom API endpoint

Example with EmailJS:

```bash
npm install @emailjs/browser
```

Then in `Contact.jsx`, initialize and use EmailJS.

## 🎨 Sections Overview

### Hero Section
- Eye-catching headline with CTA buttons
- Social media links
- Professional introduction

### About Section
- Detailed bio
- Key statistics (LeetCode problems, projects, etc.)
- Contact information

### Skills Section
- Categorized technical skills (Languages, Backend, Frontend, Database, Tools)
- Interactive skill category selection
- Tech stack overview

### Projects Section
- Detailed project cards with:
  - Project title and subtitle
  - Full description
  - Feature list
  - Technologies used
  - GitHub and Demo links

### Achievements Section
- Achievement cards with badges
- Skill proficiency levels with progress bars
- Statistics dashboard

### Contact Section
- Contact information
- Social media links
- Functional contact form
- Call-to-action section

## 🔍 SEO Optimization

The portfolio includes:
- Semantic HTML structure
- Meta description and keywords
- Open Graph tags (ready to add)
- Sitemap (can be added)
- Mobile-friendly design

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md-lg)
- **Desktop:** > 1024px (lg-xl)

## 🎯 Performance Tips

- Images are optimized (using emojis instead of image files)
- CSS is minified by Tailwind
- JavaScript is bundled and minified by Vite
- Lazy loading ready for future image additions

## 🚢 Deployment

The portfolio can be deployed to:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default {
  base: '/repository-name/',
}
```

Then:
```bash
npm run build
npm install -D gh-pages
```

### Traditional Hosting
```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📄 License

This portfolio template is free to use and modify. Update the footer as needed.

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Tailwind not working
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm run build -- --verbose
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vite.dev)
- [Web Design Best Practices](https://www.w3.org/standards/)

---

**Made with ❤️ - Mohamad Danish**
