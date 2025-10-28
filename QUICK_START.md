# Quick Start Guide

Get your wedding website up and running in 30 minutes!

## Step 1: Install Dependencies (5 minutes)

```bash
# Open Terminal and navigate to project
cd /Users/steph/wedding-website

# Install Ruby gems
bundle install

# This installs Jekyll and all required plugins
```

## Step 2: Update Your Details (10 minutes)

Edit `_config.yml` and update:

```yaml
wedding:
  couple_names: "Your Names"
  date: "2026-06-20"
  date_formatted: "June 20, 2026"
  ceremony_venue: "Your Venue Name"
  ceremony_address: "Your Address"
  # ... etc
```

## Step 3: Add Photos (10 minutes)

Add these images to `assets/images/` folder:

**Minimum Required:**
- `hero-bg.jpg` - Home page background
- `story-1.jpg` through `story-5.jpg` - Timeline photos
- `gallery-1.jpg` through `gallery-6.jpg` - Gallery photos

**Don't have photos yet?** Download free placeholders from:
- https://unsplash.com/s/photos/wedding
- https://unsplash.com/s/photos/couple
- https://unsplash.com/s/photos/garden

## Step 4: Test Locally (2 minutes)

```bash
# Start Jekyll server
bundle exec jekyll serve

# Open in browser
# Visit: http://localhost:4000
```

Browse through all pages and verify everything looks good!

Press `Ctrl + C` to stop the server.

## Step 5: Deploy (5 minutes)

### Easiest Option: Netlify

1. Go to https://netlify.com
2. Sign up (free)
3. Drag and drop your `wedding-website` folder
4. Done! Your site is live!

### GitHub Pages Option:

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/yourrepo.git
git push -u origin main

# Enable GitHub Pages in repo settings
```

## Step 6: Set Up RSVP Form (3 minutes)

1. Go to https://formspree.io
2. Sign up (free for 50 submissions/month)
3. Create new form
4. Copy your form ID
5. Update `pages/rsvp.html` line 17:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

## What's Next?

✅ **Customize Content**
- Edit "Our Story" with your actual story
- Update wedding details and timeline
- Add registry information
- Update hotel recommendations

✅ **Set Up Custom Domain** (optional)
- Buy domain from Namecheap, Google Domains, etc.
- Connect to Netlify or GitHub Pages
- See DEPLOYMENT.md for instructions

✅ **Share With Guests**
- Add link to save-the-date cards
- Share on social media
- Include in wedding invitations

## Common First Changes

### Change Colors
Edit `_sass/_variables.scss`:
```scss
$olive-dark: #YourColor;
```

### Change Fonts
Edit `_sass/_typography.scss` line 2:
```scss
@import url('https://fonts.googleapis.com/css2?family=YourFont');
```

### Update Countdown Date
Edit `assets/js/main.js` line 69:
```javascript
const weddingDate = new Date('2026-06-20T14:30:00').getTime();
```

### Add More Gallery Photos
1. Add images to `assets/images/` (gallery-7.jpg, gallery-8.jpg, etc.)
2. Copy gallery-item HTML in `pages/gallery.html`
3. Update image numbers

## Troubleshooting Quick Fixes

### Can't install gems?
```bash
# Update Ruby (need 2.7+)
ruby --version

# Install bundler if missing
gem install bundler
```

### Jekyll won't start?
```bash
# Clear cache and try again
bundle exec jekyll clean
bundle exec jekyll serve
```

### Images not showing?
- Check file names match exactly (case-sensitive!)
- Check they're in `assets/images/` folder
- Clear browser cache (Cmd+Shift+R on Mac)

### Form not working?
- Verify Formspree form ID is correct
- Forms only work in production (not localhost)
- Check Formspree dashboard after deploying

## Need More Help?

📖 **Full Documentation:**
- `README.md` - Project overview
- `CUSTOMIZATION_GUIDE.md` - Detailed customization
- `DEPLOYMENT.md` - Hosting options
- `CONTENT_IDEAS.md` - Writing inspiration
- `assets/images/README.md` - Image guidelines

💬 **Resources:**
- Jekyll Docs: https://jekyllrb.com/docs/
- Formspree Help: https://help.formspree.io/
- Netlify Docs: https://docs.netlify.com/

---

## 30-Minute Challenge ⏱️

Can you launch your wedding website in 30 minutes?

- [ ] ✅ Install dependencies (5 min)
- [ ] ✅ Update `_config.yml` (5 min)
- [ ] ✅ Add placeholder images (5 min)
- [ ] ✅ Test locally (5 min)
- [ ] ✅ Deploy to Netlify (5 min)
- [ ] ✅ Set up RSVP form (5 min)

**You did it! 🎉**

Now you can take your time customizing content, adding photos, and making it perfect for your special day.

---

**Congratulations on your engagement! 🌿💒**

Your beautiful wedding website is ready to share with your guests!

