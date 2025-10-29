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
   export GROOM_NAME="Stephen"
   export BRIDE_NAME="Stephanie"
   export WEDDING_DATE="2026-02-18"
   export DATE_FORMATTED="February 18, 2026"
   export CEREMONY_TIME="10:00 AM"
   export CEREMONY_VENUE="Balay sa Bukid"
   export CEREMONY_ADDRESS="Malasag, Barangay Cugman, Cagayan De Oro City, 9000"
   export CEREMONY_LAT="8.4580425"
   export CEREMONY_LNG="124.6915295"
   export RECEPTION_VENUE="Balay sa Bukid"
   export RECEPTION_ADDRESS="Malasag, Barangay Cugman, Cagayan De Oro City, 9000"
   export RECEPTION_TIME="12:30 PM"
   export RESPOND_TO_RSVP_BY="January 20, 2026"
   export CEREMONY_GMAPS_URL="https://maps.app.goo.gl/A8svgxK5FXhe3HzB8"
   export CONTACT_US_EMAIL="hello@one-steph-closer.com"
   export WEDDING_COORDINATOR_NAME="Emily Johnson"
   export WEDDING_COORDINATOR_EMAIL="emily@weddingplanner.com"
   export WEDDING_COORDINATOR_PHONE="+15551234567"
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

**Note:** The files `local-dev.sh` and `GITHUB_SECRETS_SETUP.md` contain sensitive information and are excluded from Git via `.gitignore`.

## Deployment

### GitHub Pages (Recommended)

This site is configured to deploy automatically to GitHub Pages using GitHub Actions.

**Setup Steps:**

1. Go to your GitHub repository settings
2. Navigate to **Settings > Secrets and variables > Actions**
3. Add the following secrets (click "New repository secret" for each):
   - `COUPLE_NAMES` - Your names (e.g., "Stephen & Stephanie")
   - `GROOM_NAME` - Groom's name
   - `BRIDE_NAME` - Bride's name
   - `WEDDING_DATE` - Date in YYYY-MM-DD format
   - `DATE_FORMATTED` - Formatted date (e.g., "February 18, 2026")
   - `CEREMONY_TIME` - Time (e.g., "10:00 AM")
   - `CEREMONY_VENUE` - Venue name
   - `CEREMONY_ADDRESS` - Full address
   - `CEREMONY_LAT` - Latitude for map
   - `CEREMONY_LNG` - Longitude for map
   - `RECEPTION_VENUE` - Reception venue name
   - `RECEPTION_ADDRESS` - Reception address
   - `RECEPTION_TIME` - Reception time
   - `RESPOND_TO_RSVP_BY` - RSVP deadline
   - `CEREMONY_GMAPS_URL` - Google Maps link
   - `CONTACT_US_EMAIL` - Contact email
   - `WEDDING_COORDINATOR_NAME` - Coordinator name
   - `WEDDING_COORDINATOR_EMAIL` - Coordinator email
   - `WEDDING_COORDINATOR_PHONE` - Coordinator phone

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

