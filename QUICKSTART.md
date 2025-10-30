# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Fast Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000
```

## ✏️ Essential Customizations

### 1. Update Your Name (2 minutes)

**components/Hero.tsx** - Line 32:
```typescript
<span className="gradient-text">Hassaan Siraj</span>
→ Change to your name
```

**app/layout.tsx** - Line 7:
```typescript
title: 'Hassaan Siraj | Full Stack Developer',
→ Update with your name
```

### 2. Update Contact Info (3 minutes)

**components/Contact.tsx** - Lines 13-15:
```typescript
value: 'hassaan@example.com',
→ Change to your email
```

**components/Contact.tsx** - Lines 41-52:
```typescript
// Update GitHub and LinkedIn URLs
link: 'https://github.com/yourusername',
link: 'https://linkedin.com/in/yourusername',
```

### 3. Customize About Section (5 minutes)

**components/About.tsx** - Lines 63-81:
- Update the description paragraphs with your own story
- Modify the tech stack list at the bottom

### 4. Update Projects (10 minutes)

**components/Projects.tsx** - Starting at line 11:
- Replace project details with your own projects
- Update descriptions, technologies, and achievements

### 5. Modify Experience (10 minutes)

**components/Experience.tsx** - Starting at line 11:
- Update company information
- Replace Devsinc with your company
- Update project details and achievements

## 🎨 Quick Theme Changes

### Change Main Colors

**tailwind.config.ts** - Lines 14-32:
```typescript
'gradient-cyber': 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%)',
→ Change the hex colors to your preferred colors
```

### Adjust Gradient

Pick colors from:
- [uigradients.com](https://uigradients.com)
- [webgradients.com](https://webgradients.com)

## 📦 Deploy (5 minutes)

### Option 1: Vercel (Easiest)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy! ✨

### Option 2: Netlify

1. Build: `npm run build`
2. Drag `.next` folder to [netlify.com/drop](https://app.netlify.com/drop)

## 🔍 Pre-Deploy Checklist

- [ ] Changed name in Hero section
- [ ] Updated email and social links
- [ ] Modified About section
- [ ] Updated at least 3 projects
- [ ] Changed company/experience details
- [ ] Tested on mobile (Chrome DevTools)
- [ ] All sections look good
- [ ] No console errors

## 🐛 Common Issues

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Three.js errors
```bash
npm install --legacy-peer-deps
```

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

## 📚 Next Steps

After basic setup:
1. Read [CUSTOMIZATION.md](CUSTOMIZATION.md) for advanced changes
2. Review [DEPLOYMENT.md](DEPLOYMENT.md) for production tips
3. Check main [README.md](README.md) for full documentation

## 🎯 Tips for Success

1. **Start Simple**: Get basic info updated first
2. **Test Often**: Check after each change
3. **Mobile First**: Test on mobile devices
4. **Keep It Real**: Use actual projects and achievements
5. **SEO Matters**: Update metadata in `app/layout.tsx`

## 💡 Pro Tips

- Use high-quality project screenshots
- Keep descriptions concise and impactful
- Highlight measurable achievements (e.g., "Improved performance by 50%")
- Test load time with Lighthouse
- Add Google Analytics for tracking

## 🆘 Need Help?

- Main documentation: [README.md](README.md)
- Customization guide: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- Deployment help: [DEPLOYMENT.md](DEPLOYMENT.md)

---

**Ready to impress recruiters? Let's go! 🚀**

