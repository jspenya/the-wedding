# 🌿 Stephen & Stephanie's Wedding Website 💒

## Welcome! Your wedding website is ready! 🎉

This is a complete, production-ready wedding website built with Jekyll, featuring:

✅ **Beautiful olive green & white design**
✅ **7 complete pages** (Home, Story, Details, RSVP, Gallery, Registry, Guest Info)
✅ **Mobile-first responsive design**
✅ **Countdown timer** to wedding day
✅ **Photo gallery** with lightbox
✅ **RSVP form** integration
✅ **Interactive features** (smooth scroll, animations, mobile menu)
✅ **SEO optimized** with social media previews
✅ **Performance optimized** for fast loading
✅ **Accessibility-focused** for all users

---

## 🚀 Quick Start (Choose Your Path)

### Path 1: I Want to See It Now! (5 minutes)

```bash
cd /Users/steph/wedding-website
bundle install
bundle exec jekyll serve
```

Visit: **http://localhost:4000**

*(Pages will have placeholder text/images - that's okay for now!)*

---

### Path 2: I Want to Customize & Launch (30 minutes)

**Follow this order:**

1. **Read:** `QUICK_START.md` (5 min read)
2. **Edit:** `_config.yml` with your wedding details
3. **Add:** Photos to `assets/images/` folder
4. **Test:** Run `bundle exec jekyll serve`
5. **Deploy:** Drag & drop to Netlify.com
6. **Done!** ✨

---

### Path 3: I Want to Understand Everything (1-2 hours)

**Read in this order:**

1. `QUICK_START.md` - Get running fast
2. `PROJECT_STRUCTURE.md` - Understand the files
3. `CUSTOMIZATION_GUIDE.md` - Detailed changes
4. `CONTENT_IDEAS.md` - Writing inspiration
5. `DEPLOYMENT.md` - Hosting options
6. `assets/images/README.md` - Image guidelines

---

## 📋 Essential First Steps

### 1. Update Your Wedding Details

**File:** `_config.yml`

```yaml
wedding:
  couple_names: "Stephen & Stephanie"  # ← Change to your names
  date: "2026-06-20"                   # ← Your wedding date
  ceremony_venue: "Garden Chapel"      # ← Your venue
  # ... update all fields
```

### 2. Add Your Photos

**Folder:** `assets/images/`

**Required minimum:**
- `hero-bg.jpg` - Home page background
- `story-1.jpg` through `story-5.jpg` - Timeline photos
- `gallery-1.jpg` through `gallery-6.jpg` - Gallery photos

**Don't have photos yet?** Get free placeholders:
- https://unsplash.com/s/photos/wedding
- https://unsplash.com/s/photos/garden

### 4. Set Up RSVP Form

**Sign up:** https://formspree.io (free)

**Edit:** `pages/rsvp.html` line 17
```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

### 5. Update Registry Information

**File:** `pages/registry.html`

- Add your actual registry links
- Update bank account numbers
- Add QR code images for cash gifts

---

## 📱 Website Pages Overview

### 🏠 Home Page (`index.html`)
- Hero section with your names
- Wedding date with live countdown
- Scripture: "We love because He first loved us"
- Quick info cards (time, venue, dress code)
- RSVP call-to-action

### 💑 Our Story (`pages/story.html`)
- Beautiful timeline layout
- 5 milestones: Met → First Date → Growing → Proposal → Future
- Photos alongside each story
- Scripture: Ecclesiastes 4:9-10

### 📍 Wedding Details (`pages/details.html`)
- Ceremony & reception information
- Full day-of timeline
- Dress code guidance
- Parking & accessibility info
- Interactive Google Map

### ✉️ RSVP (`pages/rsvp.html`)
- Clean, user-friendly form
- Attendance confirmation
- Guest count & dietary needs
- Song requests & messages
- Formspree integration

### 📸 Gallery (`pages/gallery.html`)
- Grid layout of engagement photos
- Click to view full-size (lightbox)
- Keyboard navigation (arrows, escape)
- Placeholder for wedding day photos

### 🎁 Registry (`pages/registry.html`)
- Links to online registries
- Cash gift options (GCash, bank transfers)
- QR codes for easy payments
- Gracious, non-pushy wording

### ✈️ Guest Information (`pages/info.html`)
- Hotel recommendations with group codes
- Travel directions (air, car, rideshare)
- Local attractions & restaurants
- Weather & what to bring
- Contact information

---

## 🎨 Design Features

### Color Palette
- **Primary:** Olive greens (#6B7C59, #8B9F7A, #A4B494)
- **Secondary:** Soft whites (#FFFFFF, #FDFDF8, #F9F9F4)
- **Accent:** Warm earth tones (#D4C5B0, #E8DCC4)
- **Text:** Charcoal (#2C3A2B, #4A5D4A)

### Typography
- **Headings:** Playfair Display (elegant serif)
- **Body:** Lora (readable serif)
- **Sans-serif:** Montserrat (modern, clean)
- **Script:** Great Vibes (for couple names)

### Features
- Mobile-first responsive design
- Smooth scroll animations
- Fixed header (auto-hides on scroll down)
- Mobile hamburger menu
- Countdown timer
- Gallery lightbox
- Form validation
- Lazy image loading

---

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
**Easiest, best forms, free**

1. Go to https://netlify.com
2. Sign up
3. Drag & drop your folder
4. Done! Get shareable link

### Option 2: GitHub Pages
**Free forever, great for Jekyll**

1. Push to GitHub
2. Enable Pages in settings
3. Get username.github.io URL

### Option 3: Vercel
**Similar to Netlify, fast CDN**

1. Go to https://vercel.com
2. Import from GitHub
3. Deploy!

**Full instructions:** See `DEPLOYMENT.md`

---

## 📚 Complete Documentation

Your project includes comprehensive guides:

| File | Purpose | When to Read |
|------|---------|--------------|
| `START_HERE.md` | This overview | First! |
| `QUICK_START.md` | 30-min setup | Getting started |
| `PROJECT_STRUCTURE.md` | File organization | Understanding project |
| `CUSTOMIZATION_GUIDE.md` | Detailed changes | Making it yours |
| `CONTENT_IDEAS.md` | Writing help | Creating content |
| `DEPLOYMENT.md` | Hosting guide | Launching live |
| `README.md` | Project summary | Reference |
| `assets/images/README.md` | Image guidelines | Adding photos |

---

## ⚡ Power User Quick Reference

```bash
# Install & run
bundle install && bundle exec jekyll serve

# Build for production
bundle exec jekyll build
# Output is in _site/ folder

# Clean build cache
bundle exec jekyll clean

# Update dependencies
bundle update
```

**Key files to customize:**
- `_config.yml` - Wedding details
- `_sass/_variables.scss` - Colors & fonts
- `pages/*.html` - Page content
- `assets/images/` - Your photos

---

## 🎯 30-Minute Launch Checklist

Speed run to get your site live:

- [ ] Run `bundle install`
- [ ] Update `_config.yml` with basic info
- [ ] Add 3-5 placeholder images
- [ ] Test: `bundle exec jekyll serve`
- [ ] Deploy to Netlify (drag & drop)
- [ ] Set up Formspree RSVP form
- [ ] Share link!

**Then come back and polish:**
- [ ] Write your actual story
- [ ] Add all photos
- [ ] Update all pages with real info
- [ ] Add registry links
- [ ] Set up custom domain (optional)

---

## 🆘 Troubleshooting

### "Bundle install fails"
```bash
# Check Ruby version (need 2.7+)
ruby --version

# Install bundler if missing
gem install bundler
```

### "Images don't show up"
- File names are case-sensitive!
- Check images are in `assets/images/`
- Clear browser cache (Cmd+Shift+R)

### "Form not working"
- Verify Formspree form ID is correct
- Forms only work in production (not localhost)
- Deploy first, then test

### "Site won't build"
- Check `_config.yml` formatting (proper YAML indentation)
- Run `bundle exec jekyll clean` and try again
- Check for typos in file paths

---

## 💡 Pro Tips

1. **Start simple:** Get it live with placeholders, then polish
2. **Mobile first:** Most guests will view on phones
3. **Compress images:** Use TinyPNG.com before uploading
4. **Test early:** Deploy to Netlify free tier and test with friends
5. **Backup:** Commit to Git frequently
6. **Custom domain:** $10-15/year makes it more professional

---

## 🌟 What Makes This Special

✨ **No coding required** - Just update text and add photos
✨ **Production-ready** - Built with best practices
✨ **Mobile-optimized** - Looks great on all devices
✨ **Fast loading** - Optimized for performance
✨ **SEO-friendly** - Great social media previews
✨ **Accessible** - Works for everyone
✨ **Free hosting** - Multiple free options
✨ **Easy to update** - Make changes anytime
✨ **Christian-focused** - Scripture verses integrated
✨ **Timeless design** - Elegant and romantic

---

## 📧 Need Help?

**Resources:**
- Jekyll Docs: https://jekyllrb.com/docs/
- Formspree Help: https://help.formspree.io/
- Netlify Docs: https://docs.netlify.com/
- Liquid Templates: https://shopify.github.io/liquid/

**Check documentation files** - Most questions are answered in:
- `CUSTOMIZATION_GUIDE.md` for how-to questions
- `DEPLOYMENT.md` for hosting issues
- `CONTENT_IDEAS.md` for writing help

---

## 🎊 Congratulations!

You have a beautiful, professional wedding website ready to share with your guests!

**Next steps:**
1. Customize it with your details
2. Add your photos
3. Deploy to Netlify or GitHub Pages
4. Share the link!

**Your journey together starts here. May your marriage be blessed! 🌿💒**

---

**Questions? Start with `QUICK_START.md`**

**Ready to launch? Follow the 30-minute checklist above!**

**Want to understand everything? Read all documentation files in order.**

---

*Built with ♥ for Stephen & Stephanie*
*Jekyll 4.3 • Responsive Design • Christian Values • Elegant Simplicity*

