# Stephen & Stephanie's Wedding Website

An elegant, romantic static wedding website built with Jekyll featuring an olive green and white color palette, inspired by an intimate Christian garden wedding aesthetic.

## Setup

1. Install Ruby (version 2.7 or higher)
2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## Deployment

This site can be deployed to:
- **GitHub Pages** (free, automatic Jekyll support)
- **Netlify** (free tier, form handling, custom domain)
- **Vercel** (fast, free tier)

## Customization

### Update Wedding Details
Edit `_config.yml` to update:
- Couple names
- Wedding date and time
- Venue information
- Map coordinates

### Add Photos
Place photos in `assets/images/` directory and reference them in the respective pages.

### RSVP Form
The RSVP form uses Formspree. Sign up at https://formspree.io and update the form action URL in `pages/rsvp.md`.

## Structure

- `_includes/` - Reusable components (header, footer, navigation)
- `_layouts/` - Page templates
- `_sass/` - Styling (variables, typography, components)
- `assets/` - Static files (CSS, JavaScript, images)
- `pages/` - Website pages (story, details, RSVP, etc.)

## License

Private - Created for Stephen & Stephanie's Wedding

Made with ♥ and faith

