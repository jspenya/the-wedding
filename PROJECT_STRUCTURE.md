# Project Structure

Complete overview of your wedding website file structure.

```
wedding-website/
│
├── _config.yml                 # Main configuration file (UPDATE THIS FIRST!)
├── Gemfile                     # Ruby dependencies
├── .gitignore                  # Git ignore rules
│
├── index.html                  # Home page with hero section
│
├── 📚 Documentation Files
│   ├── README.md               # Project overview
│   ├── QUICK_START.md          # 30-minute setup guide
│   ├── CUSTOMIZATION_GUIDE.md  # Detailed customization instructions
│   ├── DEPLOYMENT.md           # Hosting & deployment guide
│   ├── CONTENT_IDEAS.md        # Writing inspiration & examples
│   └── PROJECT_STRUCTURE.md    # This file
│
├── 📁 _includes/               # Reusable components
│   ├── head.html               # <head> tag with meta, SEO, fonts
│   ├── header.html             # Navigation bar + mobile menu
│   └── footer.html             # Footer with links & scripture
│
├── 📁 _layouts/                # Page templates
│   ├── default.html            # Base template (header + content + footer)
│   ├── home.html               # Home page template
│   └── page.html               # Interior page template
│
├── 📁 _sass/                   # Styles (SCSS)
│   ├── _variables.scss         # Colors, fonts, spacing, breakpoints
│   ├── _typography.scss        # Font styles, headings, text
│   ├── _layout.scss            # Grid, containers, sections, buttons
│   └── _components.scss        # Header, nav, hero, timeline, footer
│
├── 📁 assets/                  # Static files
│   ├── css/
│   │   └── main.scss           # Main CSS file (imports all SASS)
│   ├── js/
│   │   └── main.js             # JavaScript (countdown, nav, gallery, forms)
│   └── images/
│       ├── README.md           # Image guidelines & requirements
│       └── (your photos here)  # Add all wedding photos here
│
└── 📁 pages/                   # Website pages
    ├── story.html              # Our Story with timeline
    ├── details.html            # Wedding details, venue, timeline
    ├── rsvp.html               # RSVP form
    ├── gallery.html            # Photo gallery with lightbox
    ├── registry.html           # Gift registry & cash gifts
    └── info.html               # Travel, hotels, local info
```

---

## File Descriptions

### Configuration & Setup

**`_config.yml`** ⭐ IMPORTANT
- Wedding details (names, date, venue, address)
- Site settings (title, description, URL)
- Update this FIRST before anything else

**`Gemfile`**
- Ruby gem dependencies (Jekyll, plugins)
- Run `bundle install` to install

**`.gitignore`**
- Files to exclude from Git
- Includes build folders, cache, system files

---

### Content Files (HTML)

**`index.html`** - Home Page
- Hero section with names, date, countdown
- Scripture verse (1 John 4:19)
- Quick wedding info cards
- RSVP call-to-action

**`pages/story.html`** - Our Story
- Timeline layout with 5 milestones
- Photos alongside each story
- How you met → Proposal → Future
- RSVP link at bottom

**`pages/details.html`** - Wedding Details
- Ceremony & reception information
- Order of events timeline
- Dress code guidelines
- Parking & accessibility info
- Google Maps integration

**`pages/rsvp.html`** - RSVP Form
- Name, email, attendance fields
- Guest count, dietary restrictions
- Song requests, messages/prayers
- Formspree integration

**`pages/gallery.html`** - Photo Gallery
- Grid layout of engagement photos
- Lightbox for full-screen viewing
- Placeholder for wedding day photos
- Keyboard navigation support

**`pages/registry.html`** - Registry & Gifts
- Links to online registries (Amazon, Target, etc.)
- Cash gift options (GCash, bank transfer)
- QR codes for payments
- Gracious messaging

**`pages/info.html`** - Guest Information
- Hotel recommendations with group codes
- Travel directions (air, car, rideshare)
- Local attractions & restaurants
- Weather info & what to bring
- Contact information

---

### Layouts & Components

**`_layouts/default.html`**
- Base template for all pages
- Includes header, main content, footer
- All pages inherit from this

**`_layouts/home.html`**
- Extends default layout
- Used only for index.html
- Minimal wrapper for home content

**`_layouts/page.html`**
- Extends default layout
- Used for all interior pages
- Adds page title/subtitle header

**`_includes/head.html`**
- Meta tags (charset, viewport, description)
- SEO tags (Jekyll SEO plugin)
- Open Graph & Twitter cards
- Favicon link
- CSS stylesheet link
- Google Fonts preconnect

**`_includes/header.html`**
- Fixed navigation bar
- Desktop menu (horizontal)
- Mobile hamburger menu
- Logo (couple names)

**`_includes/footer.html`**
- Three-column layout (info, links, contact)
- Scripture verse (1 Cor 13:13)
- Copyright & credits
- JavaScript include

---

### Styles (SCSS/CSS)

**`_sass/_variables.scss`** ⭐ CUSTOMIZE COLORS HERE
- Color palette (olive greens, whites, earth tones)
- Typography (font families, sizes)
- Spacing scale
- Responsive breakpoints
- Z-index layers

**`_sass/_typography.scss`**
- Google Fonts import
- Base font styles
- Heading styles (h1-h6)
- Scripture/quote styling
- Text utility classes

**`_sass/_layout.scss`**
- CSS reset
- Container & grid system
- Section spacing
- Cards & buttons
- Fade-in animations
- Utility classes (margins, text-align)

**`_sass/_components.scss`**
- Header & navigation (desktop + mobile)
- Hero section & countdown
- Timeline layout
- Gallery grid
- Footer layout
- Form styles (in page files)

**`assets/css/main.scss`**
- Imports all SCSS partials
- Compiled to CSS by Jekyll
- Final stylesheet used by site

---

### JavaScript

**`assets/js/main.js`** - All Site Interactions
- Mobile navigation toggle
- Header show/hide on scroll
- Countdown timer
- Smooth scrolling
- Scroll animations (Intersection Observer)
- RSVP form handling & validation
- Gallery lightbox (open, close, prev/next)
- Keyboard navigation (arrows, escape)
- Lazy image loading
- Active navigation highlighting

**Features:**
- 100% vanilla JavaScript (no jQuery or dependencies)
- Modern browser APIs (Intersection Observer)
- Accessibility-focused (keyboard nav, ARIA)
- Performance-optimized

---

### Documentation Files

**`README.md`**
- Project overview
- Setup instructions
- Deployment options
- Customization basics

**`QUICK_START.md`** ⭐ START HERE
- 30-minute setup challenge
- Step-by-step first launch
- Common first changes
- Quick troubleshooting

**`CUSTOMIZATION_GUIDE.md`**
- Detailed customization instructions
- How to update every section
- Color & font changes
- Testing checklist

**`DEPLOYMENT.md`**
- Complete deployment guide
- GitHub Pages, Netlify, Vercel
- Custom domain setup
- Post-deployment checklist
- Troubleshooting

**`CONTENT_IDEAS.md`**
- Writing inspiration
- Scripture alternatives
- Story writing tips
- Wording suggestions
- Photo ideas

**`assets/images/README.md`**
- Image requirements
- File naming conventions
- Optimization tips
- Placeholder resources
- Image checklist

---

## What Files to Edit

### Essential Edits (Required)

1. **`_config.yml`** - Your wedding details
2. **`pages/story.html`** - Your actual story
3. **`pages/details.html`** - Your venue & timeline
4. **`pages/rsvp.html`** - Your Formspree form ID
5. **`pages/registry.html`** - Your registry links & payment info
6. **`pages/info.html`** - Your hotel & travel recommendations
7. **`assets/images/`** - Add all your photos

### Optional Edits

1. **`_sass/_variables.scss`** - Change colors/fonts
2. **`index.html`** - Customize welcome message
3. **`_includes/footer.html`** - Change scripture or contact
4. **`assets/js/main.js`** - Adjust countdown date/time

---

## What NOT to Edit (Unless You Know What You're Doing)

- `_includes/head.html` - Leave meta tags as-is
- `_layouts/default.html` - Core structure
- `assets/js/main.js` - Complex logic (except countdown date)
- File structure - Don't rename folders

---

## Build Process

When you run `jekyll serve` or `jekyll build`, Jekyll:

1. Reads `_config.yml`
2. Processes SCSS files → CSS
3. Combines layouts + includes + pages
4. Generates static HTML files in `_site/`
5. Copies assets to `_site/assets/`

The `_site/` folder is your final website (upload this for hosting).

---

## File Size Guide

Keep files optimized:

- ✅ HTML files: < 100KB each
- ✅ CSS file: < 200KB (typically 50-80KB)
- ✅ JS file: < 100KB (typically 10-20KB)
- ✅ Images: < 500KB each (300KB ideal)
- ✅ Total site: < 10MB

This ensures fast loading on mobile devices.

---

## Technology Stack

- **Jekyll 4.3.3** - Static site generator (Ruby)
- **Liquid** - Template language
- **SCSS/SASS** - CSS preprocessor
- **Vanilla JavaScript** - No frameworks or libraries
- **HTML5** - Semantic markup
- **Formspree** - Form backend (RSVP)
- **Google Fonts** - Typography
- **Google Maps Embed** - Location maps

**Why these choices?**
- Fast loading (static HTML)
- Free hosting options (GitHub Pages, Netlify)
- No databases or servers needed
- Easy to maintain and update
- SEO-friendly
- Works everywhere

---

**Questions about the structure?** Check the other documentation files or start with `QUICK_START.md`!

