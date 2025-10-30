# Complete Setup Instructions

Follow these steps to get your portfolio running perfectly.

## Prerequisites

Make sure you have installed:
- **Node.js** (version 18.17 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for version control) - [Download](https://git-scm.com/)

Check versions:
```bash
node --version  # Should be v18.17 or higher
npm --version   # Should be 9.0 or higher
```

## Step-by-Step Installation

### 1. Navigate to Project Directory

```bash
cd /Users/dev/Documents/Documents/portfolio
```

### 2. Install Dependencies

This will install all required packages including Next.js, React, Three.js, Framer Motion, etc.

```bash
npm install
```

**If you encounter peer dependency issues:**
```bash
npm install --legacy-peer-deps
```

**Alternative package managers:**
```bash
# Using Yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Verify Installation

Check that node_modules folder was created:
```bash
ls -la
# You should see a node_modules directory
```

### 4. Start Development Server

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.0.4
- Local:        http://localhost:3000
- Ready in X.Xs
```

### 5. Open in Browser

Navigate to: **http://localhost:3000**

You should see the portfolio homepage with:
- Animated 3D background
- Hero section with your name
- Smooth scrolling sections

## What You Should See

### Homepage Features:
✅ Navigation bar at the top  
✅ 3D particle animation in the background  
✅ Hero section with gradient text  
✅ "View Projects" and "Download Resume" buttons  
✅ About section with glassmorphism cards  
✅ Experience timeline  
✅ Projects grid with hover effects  
✅ Skills section with progress bars  
✅ Contact section with social links  

## Customization (Priority Order)

### ⭐ Must Change Immediately:

1. **Your Name** - `components/Hero.tsx`
2. **Email Address** - `components/Contact.tsx`
3. **Social Links** - `components/Contact.tsx`
4. **Meta Tags** - `app/layout.tsx`

### ⭐⭐ Important to Update:

5. **About Description** - `components/About.tsx`
6. **Projects** - `components/Projects.tsx`
7. **Experience** - `components/Experience.tsx`
8. **Skills Levels** - `components/Skills.tsx`

### ⭐⭐⭐ Optional Customizations:

9. **Color Scheme** - `tailwind.config.ts`
10. **Animations** - Individual component files
11. **Three.js Effects** - `components/ThreeBackground.tsx`

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in `.next` folder.

Test production build locally:
```bash
npm run start
```

## File Structure Overview

```
portfolio/
│
├── app/                      # Next.js App Router
│   ├── layout.tsx           # ⚠️ Update: Meta tags, SEO
│   ├── page.tsx             # Main page structure
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # SEO sitemap
│   └── manifest.ts          # PWA manifest
│
├── components/              # React Components
│   ├── Hero.tsx             # ⚠️ Update: Your name
│   ├── About.tsx            # ⚠️ Update: Your story
│   ├── Experience.tsx       # ⚠️ Update: Your work history
│   ├── Projects.tsx         # ⚠️ Update: Your projects
│   ├── Skills.tsx           # ⚠️ Update: Your skills
│   ├── Contact.tsx          # ⚠️ Update: Your contact info
│   ├── Navigation.tsx       # Top navigation bar
│   └── ThreeBackground.tsx  # 3D animation
│
├── public/                  # Static files
│   └── robots.txt           # SEO robots file
│
├── Configuration Files
│   ├── package.json         # Dependencies
│   ├── tsconfig.json        # TypeScript config
│   ├── tailwind.config.ts   # Tailwind CSS config
│   ├── next.config.js       # Next.js config
│   └── postcss.config.js    # PostCSS config
│
└── Documentation
    ├── README.md            # Full documentation
    ├── QUICKSTART.md        # Quick start guide
    ├── CUSTOMIZATION.md     # Customization details
    └── DEPLOYMENT.md        # Deployment guide
```

## Troubleshooting

### Issue: Port 3000 Already in Use

**Solution:**
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Issue: Module Not Found Errors

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

### Issue: Three.js/React Errors

**Solution:**
```bash
npm install --legacy-peer-deps
```

### Issue: TypeScript Errors

**Solution:**
```bash
# Check TypeScript config
npx tsc --noEmit

# Restart TypeScript server in VS Code
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

### Issue: Styling Not Applying

**Solution:**
```bash
# Rebuild Tailwind
npx tailwindcss -i ./app/globals.css -o ./app/output.css

# Or restart dev server
npm run dev
```

### Issue: Build Fails

**Solution:**
```bash
# Check for errors
npm run build

# Common fixes:
rm -rf .next
npm run build
```

## Performance Optimization

Before deploying:

1. **Optimize Images**: Use WebP format, compress images
2. **Test Load Time**: Use Lighthouse in Chrome DevTools
3. **Check Mobile**: Test on actual mobile devices
4. **Verify Links**: Ensure all links work
5. **SEO Check**: Verify meta tags and sitemap

## Development Tips

### Hot Reload
Changes are automatically reflected - just save the file!

### Component Testing
- Edit a component
- Save (Cmd+S / Ctrl+S)
- Browser auto-updates

### Debugging
- Open browser DevTools (F12)
- Check Console for errors
- Use React DevTools extension

### VS Code Extensions (Recommended)
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint

## Next Steps

1. ✅ Verify installation works
2. 📝 Update personal information
3. 🎨 Customize colors and style
4. 📱 Test on mobile
5. 🚀 Deploy to Vercel
6. 📊 Add analytics (optional)
7. 🔍 Submit to search engines

## Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion)
- **Three.js**: [threejs.org](https://threejs.org)
- **React**: [react.dev](https://react.dev)

## Support

Questions? Check the documentation files:
- `README.md` - Complete overview
- `QUICKSTART.md` - Fast setup guide
- `CUSTOMIZATION.md` - Customization details
- `DEPLOYMENT.md` - Deployment instructions

---

**You're all set! Time to make this portfolio yours! 🎨🚀**

