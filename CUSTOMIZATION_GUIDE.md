# Wedding Website Customization Guide

## Quick Start Checklist

### 1. Update Wedding Details in `_config.yml`

```yaml
wedding:
  couple_names: "Stephen & Stephanie"  # Change to your names
  groom_name: "Stephen"
  bride_name: "Stephanie"
  date: "2026-06-20"  # Format: YYYY-MM-DD
  date_formatted: "June 20, 2026"
  ceremony_time: "2:30 PM"
  ceremony_venue: "Garden Chapel"  # Your venue name
  ceremony_address: "123 Garden Lane, Your City, State 12345"
  ceremony_lat: "40.7128"  # For map (get from Google Maps)
  ceremony_lng: "-74.0060"
  reception_venue: "Garden Reception Hall"
  reception_address: "123 Garden Lane, Your City, State 12345"
  reception_time: "4:30 PM"
```

### 2. Add Your Photos

Place your images in the `assets/images/` folder:

**Required Images:**
- `hero-bg.jpg` - Hero section background (1920x1080px recommended)
- `og-image.jpg` - Social media preview image (1200x630px)
- `favicon.png` - Browser tab icon (32x32px or 64x64px)

**Gallery Images (6+ images):**
- `gallery-1.jpg` through `gallery-6.jpg`
- Add more by copying the gallery item HTML in `pages/gallery.html`

**Registry QR Codes (optional):**
- `gcash-qr.png` - GCash QR code for cash gifts

**Image Optimization Tips:**
- Use JPEG for photos (smaller file size)
- Use PNG for logos/graphics
- Compress images with TinyPNG.com or similar
- Recommended max width: 2000px
- Keep file sizes under 500KB each

### 3. Set Up RSVP Form (Formspree)

1. Go to https://formspree.io
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint URL
5. Update `pages/rsvp.html` line 17:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual form ID

### 4. Add Google Maps API Key

To show the interactive map on the Details page:

1. Go to https://console.cloud.google.com/
2. Create a project and enable Maps Embed API
3. Get your API key
4. Update `pages/details.html` line 131:
   ```html
   src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=..."
   ```
   Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual key

**Alternative:** Use a simple link-based map instead:
```html
<a href="https://maps.google.com/?q=YOUR_ADDRESS" target="_blank">
  <img src="path/to/static-map-screenshot.jpg" alt="Venue location">
</a>
```

### 5. Update Registry Information

Edit `pages/registry.html`:

**Registry Links (lines 22-63):**
- Update registry URLs with your actual registry IDs
- Remove any registries you're not using
- Add additional registries by copying a card section

**Cash Gift Details (lines 74-110):**
- Update GCash/bank account numbers
- Update account names
- Add/remove payment methods as needed
- Update QR code images

### 6. Customize Hotel & Travel Information

Edit `pages/info.html`:

**Hotels (lines 10-72):**
- Replace with your actual recommended hotels
- Update addresses, phone numbers, group codes
- Update distances from your venue

**Travel Info (lines 78-122):**
- Update nearest airport code and distance
- Update driving directions
- Add/remove transportation options

**Local Attractions (lines 128-171):**
- Add your favorite local spots
- Recommend restaurants you love

### 7. Customize Your Story

Edit `pages/story.html`:

- Rewrite each timeline event with your actual story
- Update dates and locations
- Change the number of timeline items (add or remove)
- Keep the structure for consistent styling

### 8. Update Contact Information

Update these in multiple places:

**Footer (`_includes/footer.html`):**
- Line 20: Email address

**Details page (`pages/details.html`):**
- Bottom: Contact email

**Info page (`pages/info.html`):**
- Lines 185-203: Wedding coordinator info
- Contact email

**RSVP page (`pages/rsvp.html`):**
- Line 87: Contact email

### 9. Adjust Wedding Timeline

Edit `pages/details.html` (lines 52-92):

Update the order of events with your actual schedule:
```html
<div class="card">
  <h4>2:00 PM</h4>
  <p><strong>Your Event Name</strong></p>
  <p>Event description</p>
</div>
```

### 10. Update Countdown Timer

The countdown automatically uses the date from `_config.yml`, but you can also customize it in `assets/js/main.js` (line 69):

```javascript
const weddingDate = new Date('2026-06-20T14:30:00').getTime();
```

Format: `YYYY-MM-DDTHH:MM:SS` (24-hour format, local time)

## Color Customization

To change the color scheme, edit `_sass/_variables.scss`:

```scss
// Primary olive green palette
$olive-dark: #6B7C59;
$olive-medium: #8B9F7A;
$olive-light: #A4B494;

// Background colors
$white: #FFFFFF;
$off-white: #FDFDF8;
$cream: #F9F9F4;
```

## Typography Customization

To change fonts, edit `_sass/_typography.scss` (line 2):

```scss
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT_HERE');
```

Then update font variables in `_sass/_variables.scss`:

```scss
$font-heading: 'Your Heading Font', serif;
$font-body: 'Your Body Font', serif;
$font-sans: 'Your Sans Font', sans-serif;
```

## Testing Checklist

Before launching:

- [ ] Test on mobile devices (iPhone, Android)
- [ ] Test on tablets (iPad)
- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Submit test RSVP to verify form works
- [ ] Check all links open correctly
- [ ] Verify countdown timer is accurate
- [ ] Test gallery lightbox on all devices
- [ ] Verify map shows correct location
- [ ] Check all images load properly
- [ ] Test mobile menu opens and closes
- [ ] Verify all emails are correct
- [ ] Test in dark mode (if applicable)

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub account
2. Create a new repository named `username.github.io`
3. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```
4. Go to repository Settings → Pages
5. Select source: Deploy from branch `main`
6. Your site will be live at `https://username.github.io`

**Custom Domain:**
1. Buy a domain (e.g., stephen-and-stephanie.com)
2. Add CNAME file with your domain
3. Configure DNS settings with your domain provider
4. Update in GitHub Pages settings

### Option 2: Netlify

1. Sign up at https://netlify.com
2. Connect your GitHub repository (or drag & drop folder)
3. Build settings:
   - Build command: `jekyll build`
   - Publish directory: `_site`
4. Deploy!

**Benefits:**
- Form handling included (alternative to Formspree)
- Automatic HTTPS
- Custom domain support
- Continuous deployment

### Option 3: Vercel

Similar to Netlify:
1. Sign up at https://vercel.com
2. Import your GitHub repository
3. Deploy!

## Support & Troubleshooting

### Site Not Building?

**Check Jekyll version:**
```bash
jekyll --version
```

**Test build locally:**
```bash
bundle exec jekyll serve
```

**Common Issues:**
- Ruby version too old (need 2.7+)
- Missing gems: Run `bundle install`
- Syntax error in YAML: Check `_config.yml` indentation
- Missing images: Check file paths and names

### Forms Not Working?

- Verify Formspree form ID is correct
- Check email address is confirmed in Formspree
- Test form submission with network tab open in browser
- Check Formspree dashboard for submissions

### Images Not Showing?

- Verify image files exist in `assets/images/`
- Check file names match exactly (case-sensitive)
- Verify image paths in HTML use correct syntax:
  ```liquid
  {{ '/assets/images/your-image.jpg' | relative_url }}
  ```

### Countdown Not Working?

- Verify date format in `_config.yml`
- Check JavaScript console for errors
- Verify date format in `main.js` matches your timezone

## Need Help?

- Jekyll Documentation: https://jekyllrb.com/docs/
- Liquid Template Language: https://shopify.github.io/liquid/
- Formspree Docs: https://help.formspree.io/
- CSS/SASS Guide: https://sass-lang.com/guide

---

**Congratulations on your wedding! 🌿💒**

May this website help you celebrate your special day with all your loved ones.

