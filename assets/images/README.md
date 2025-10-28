# Wedding Website Images

Place all your wedding photos in this directory.

## Required Images

### Essential Images (Must Have)

1. **hero-bg.jpg** (1920x1080px recommended)
   - Background image for home page hero section
   - Should be a beautiful garden/nature scene or engagement photo
   - Keep file size under 500KB (compress at tinypng.com)

2. **og-image.jpg** (1200x630px)
   - Social media preview image
   - Shows when you share the website link
   - Should include both of you + wedding date if possible

3. **favicon.png** (32x32px or 64x64px)
   - Small icon that appears in browser tab
   - Can be your initials, rings icon, or simple design

### Story Page Images (5 images needed)

Add these images for the timeline on "Our Story" page:

- **story-1.jpg** - How you met photo
- **story-2.jpg** - First date or early dating photo
- **story-3.jpg** - Growing together / mid-relationship photo
- **story-4.jpg** - Proposal photo
- **story-5.jpg** - Recent engagement photo

**Recommended size:** 800x600px or similar landscape orientation
**File size:** Keep under 300KB each

### Gallery Images (Minimum 6 images)

Add engagement photos to the gallery:

- **gallery-1.jpg**
- **gallery-2.jpg**
- **gallery-3.jpg**
- **gallery-4.jpg**
- **gallery-5.jpg**
- **gallery-6.jpg**

You can add more by copying the gallery HTML structure in `pages/gallery.html`

**Recommended size:** 1000x1000px (square) or 1200x800px (landscape)
**File size:** Keep under 400KB each

### Registry Images (Optional)

- **gcash-qr.png** - Your GCash QR code for cash gifts
- **bank-qr.png** - Bank transfer QR code (if applicable)

**Recommended size:** 500x500px
**File format:** PNG for QR codes

## Image Tips

### Where to Get Photos

1. **Professional Engagement Photos**
   - Ask your photographer for web-optimized versions
   - Request 1-2MB max per photo
   - Get a mix of close-ups and wide shots

2. **Smartphone Photos**
   - Recent iPhones/Androids take great quality photos
   - Take photos in good lighting (golden hour is best)
   - Use portrait mode for couple shots

3. **Free Stock Photos (Temporary Placeholders)**
   - unsplash.com - Search "wedding", "couple", "garden"
   - pexels.com - High quality free photos
   - Use these until you have your own photos

### Optimization Tools

Before uploading, compress images to reduce file size:

- **TinyPNG** - https://tinypng.com (drag & drop)
- **Squoosh** - https://squoosh.app (more control)
- **ImageOptim** - Mac app for batch compression
- **Photoshop** - "Save for Web" at 60-80% quality

### Image Format Guidelines

- **JPEG (.jpg)** - Use for all photos (smaller file size)
- **PNG (.png)** - Use for logos, QR codes, graphics with transparency
- **WebP** - Modern format (even smaller), but PNG/JPG fallback recommended

### Aspect Ratios

- **Hero image:** 16:9 landscape (1920x1080)
- **Story timeline:** 4:3 or 16:9 landscape
- **Gallery:** Square (1:1) or landscape
- **Social preview:** 1.91:1 (1200x630)

### File Naming

- Use lowercase
- Use hyphens instead of spaces
- Be descriptive but brief
- Examples:
  - ✅ `engagement-garden-sunset.jpg`
  - ✅ `proposal-moment.jpg`
  - ❌ `IMG_1234.jpg`
  - ❌ `Our Photo From The Park.jpg`

## Creating Placeholder Images

If you don't have photos ready yet, create simple placeholders:

### Using Canva (Free)

1. Go to canva.com
2. Create custom size (1920x1080 for hero)
3. Choose olive green background (#8B9F7A)
4. Add text: "Stephen & Stephanie"
5. Download as JPG

### Using Photoshop/GIMP

1. New file with required dimensions
2. Fill with olive green color
3. Add text overlay
4. Save as JPG at 70% quality

### Using Online Tools

- **Placeholder.com** - `https://via.placeholder.com/1920x1080/8B9F7A/FFFFFF?text=Hero+Background`
- **Unsplash** - Search for olive green nature/garden photos

## Current Image Status

Check off images as you add them:

- [ ] hero-bg.jpg
- [ ] og-image.jpg
- [ ] favicon.png
- [ ] story-1.jpg
- [ ] story-2.jpg
- [ ] story-3.jpg
- [ ] story-4.jpg
- [ ] story-5.jpg
- [ ] gallery-1.jpg
- [ ] gallery-2.jpg
- [ ] gallery-3.jpg
- [ ] gallery-4.jpg
- [ ] gallery-5.jpg
- [ ] gallery-6.jpg
- [ ] gcash-qr.png (optional)

## Testing Images

After adding images:

1. Run Jekyll locally: `bundle exec jekyll serve`
2. Visit each page and verify images load
3. Check images on mobile device
4. Test lightbox gallery functionality
5. Verify hero image looks good on different screen sizes

## Troubleshooting

### Images not showing up?

1. Check file name matches exactly (case-sensitive!)
2. Verify image is in `assets/images/` folder
3. Check file path in HTML:
   ```liquid
   {{ '/assets/images/your-image.jpg' | relative_url }}
   ```
4. Clear browser cache and reload
5. Check browser console for 404 errors

### Images loading slowly?

1. Compress images more (aim for under 300KB)
2. Reduce image dimensions (don't need 4000px width)
3. Use TinyPNG to compress without quality loss
4. Consider using WebP format with JPG fallback

### Images look blurry?

1. Original image resolution too low
2. Try exporting at higher quality (80-90%)
3. Make sure image is at least 2x the display size for retina screens
4. For hero: use minimum 1920px width

---

**Need more help?** Check out:
- Image Optimization Guide: https://web.dev/fast/#optimize-your-images
- Free Photo Resources: CONTENT_IDEAS.md
- Deployment Guide: DEPLOYMENT.md

