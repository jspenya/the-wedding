# Deployment Guide

## Prerequisites

Before deploying, make sure you have:
- Updated all wedding details in `_config.yml`
- Added all your photos to `assets/images/`
- Set up your Formspree form for RSVPs
- Tested the site locally

## Local Testing

Before deploying, test your site locally:

```bash
# Navigate to project directory
cd /Users/steph/wedding-website

# Install dependencies (first time only)
bundle install

# Run local server
bundle exec jekyll serve

# Open in browser
# Visit: http://localhost:4000
```

Press `Ctrl + C` to stop the server.

## Deployment Options

### Option 1: GitHub Pages (Free, Easiest for Jekyll)

#### Step 1: Create GitHub Repository

1. Go to https://github.com and sign in (or create account)
2. Click "New repository" (+ icon, top right)
3. Repository name: `your-wedding-website` (or any name)
4. Keep it Public (or Private if you have GitHub Pro)
5. Don't initialize with README
6. Click "Create repository"

#### Step 2: Push Your Code

Open Terminal and run these commands:

```bash
# Navigate to your project
cd /Users/steph/wedding-website

# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial wedding website"

# Add remote repository (replace USERNAME and REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 2-3 minutes for deployment
7. Your site will be live at: `https://USERNAME.github.io/REPO-NAME/`

#### Step 4: Custom Domain (Optional)

If you bought a custom domain (e.g., stephen-and-stephanie.com):

**In GitHub:**
1. Go to Settings → Pages
2. Enter your custom domain
3. Check "Enforce HTTPS"
4. Save

**With Your Domain Provider:**

For apex domain (stephen-and-stephanie.com):
```
A Record: @ → 185.199.108.153
A Record: @ → 185.199.109.153
A Record: @ → 185.199.110.153
A Record: @ → 185.199.111.153
```

For www subdomain:
```
CNAME Record: www → USERNAME.github.io
```

Wait 24-48 hours for DNS propagation.

---

### Option 2: Netlify (Easiest Overall, Best Forms)

#### Why Netlify?
- Free tier is generous
- Built-in form handling (no Formspree needed)
- Automatic HTTPS
- Custom domain support
- Continuous deployment

#### Step 1: Create Netlify Account

1. Go to https://netlify.com
2. Sign up (can use GitHub account)

#### Step 2: Deploy Your Site

**Method A: Git-based (Recommended)**

1. Push your code to GitHub (see GitHub instructions above)
2. In Netlify, click "New site from Git"
3. Choose "GitHub" and authorize
4. Select your repository
5. Build settings:
   - Build command: `jekyll build`
   - Publish directory: `_site`
6. Click "Deploy site"

**Method B: Drag & Drop**

1. In Netlify, go to Sites
2. Drag and drop your `wedding-website` folder
3. Wait for deployment
4. Done!

#### Step 3: Configure Forms (Replace Formspree)

Netlify has built-in form handling:

1. Update `pages/rsvp.html`:
   ```html
   <form name="rsvp" method="POST" data-netlify="true">
   ```

2. That's it! Forms will appear in Netlify dashboard
3. Set up email notifications in Netlify Settings

#### Step 4: Custom Domain

1. Buy domain from Namecheap, Google Domains, etc.
2. In Netlify: Site settings → Domain management
3. Click "Add custom domain"
4. Follow instructions to update DNS

---

### Option 3: Vercel

Very similar to Netlify:

1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Deploy!

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images display properly
- [ ] Mobile menu works
- [ ] Countdown timer is accurate
- [ ] RSVP form submits successfully
- [ ] Gallery lightbox works
- [ ] All links work (email, maps, registries)
- [ ] Site works on mobile devices
- [ ] Site works on different browsers
- [ ] Custom domain resolves (if applicable)
- [ ] HTTPS/SSL is active

## Making Updates

### With GitHub Pages or Netlify (Git method)

After making changes locally:

```bash
# Navigate to project
cd /Users/steph/wedding-website

# See what changed
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of what you changed"

# Push to GitHub
git push

# Wait 1-2 minutes for automatic deployment
```

### With Netlify (Drag & Drop method)

1. Make changes locally
2. Rebuild site: `bundle exec jekyll build`
3. Drag the `_site` folder to Netlify
4. Or drag the entire project folder

---

## Troubleshooting

### Build Fails on GitHub Pages

**Issue:** Site shows error or doesn't build

**Solution:**
- Check `_config.yml` syntax (proper YAML indentation)
- Remove any plugins not supported by GitHub Pages
- Check GitHub Pages build log in Actions tab

### Images Don't Load After Deployment

**Issue:** Images work locally but not online

**Solution 1:** Check `_config.yml` baseurl
```yaml
baseurl: "/your-repo-name"  # If deployed to username.github.io/repo-name
baseurl: ""                  # If deployed to custom domain or username.github.io
```

**Solution 2:** Use proper Liquid syntax
```liquid
{{ '/assets/images/photo.jpg' | relative_url }}
```

### Form Submissions Not Received

**Formspree:**
- Verify form ID is correct
- Check Formspree dashboard
- Confirm email in Formspree settings

**Netlify Forms:**
- Check Netlify dashboard → Forms tab
- Verify `data-netlify="true"` attribute is present
- Test in production (forms don't work on localhost)

### Site Loads Slowly

**Solutions:**
- Compress images (use TinyPNG.com)
- Enable Netlify/Vercel CDN (automatic)
- Reduce image file sizes to < 500KB
- Use WebP format for images

### Custom Domain Not Working

**Check:**
- DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check domain registrar settings
- Verify CNAME file (GitHub Pages)
- Check Netlify/Vercel domain settings

---

## Security Best Practices

- ✅ Use HTTPS (automatic with Netlify/Vercel/GitHub Pages)
- ✅ Don't commit sensitive data (API keys, passwords)
- ✅ Use environment variables for API keys
- ✅ Keep dependencies updated
- ✅ Use strong passwords for accounts

---

## Monitoring & Analytics (Optional)

### Add Google Analytics

1. Create Google Analytics account
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `_includes/head.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Netlify Analytics

Built-in analytics available in Netlify dashboard (paid feature).

---

## Cost Estimate

**Free Options:**
- GitHub Pages: Free
- Netlify: Free (100GB bandwidth/month)
- Vercel: Free (100GB bandwidth/month)

**Paid (Optional):**
- Custom Domain: $10-15/year
- Formspree Pro: $10/month (500 submissions)
- Netlify Forms: Free for 100 submissions/month
- Google Analytics: Free

**Recommended Setup: $0-15/year**
- Host on Netlify (free)
- Custom domain ($10-15/year)
- Use Netlify Forms (free)
- Free SSL/HTTPS

---

## Support Resources

- **Jekyll Docs:** https://jekyllrb.com/docs/
- **GitHub Pages:** https://docs.github.com/en/pages
- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Docs:** https://vercel.com/docs

---

**Your wedding website is ready to share with the world! 🌿💒**

Once deployed, share the link with your guests via:
- Save the Date cards
- Wedding invitations
- Social media
- Email announcements

