# Stephen & Stephanie's Wedding Website

An elegant, romantic static wedding website built with Jekyll featuring an olive green and white color palette, inspired by an intimate Christian garden wedding aesthetic.

## Setup

### Local Development

1. Install Ruby (version 2.7 or higher)

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:

   **Option A (Recommended):** Use the convenience script
   ```bash
   ./local-dev.sh
   ```

   **Option B:** Set environment variables manually
   ```bash
   export COUPLE_NAMES="Stephen & Stephanie"
   ...
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

**Note:** The files `local-dev.sh` and `GITHUB_SECRETS_SETUP.md` contain sensitive information and are excluded from Git via `.gitignore`.

## Deployment

### GitHub Pages (Recommended)

This site is configured to deploy automatically to GitHub Pages using GitHub Actions.

4. Enable GitHub Pages:
   - Go to **Settings > Pages**
   - Under "Build and deployment", select **GitHub Actions** as the source

5. Push to master branch - the site will automatically build and deploy!

### Other Deployment Options

This site can also be deployed to:
- **Netlify** (free tier, form handling, custom domain)
- **Vercel** (fast, free tier)

## Customization

### Update Wedding Details

Wedding details are stored as GitHub Secrets for security. To update them:

1. Go to your repository **Settings > Secrets and variables > Actions**
2. Update the relevant secret values
3. The changes will take effect on the next deployment

For local development, update the environment variables before running `jekyll serve`.

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

