# Hassaan Siraj - Portfolio Website

A modern, visually stunning, and highly professional personal portfolio website showcasing my work as a Full Stack Developer specializing in Ruby on Rails, Node.js, Python, React.js, and Vue.js.

## 🚀 Features

- **Modern Design**: Dark mode base with elegant blue-to-purple gradient accents
- **3D Animation**: Three.js powered animated background with particle effects
- **Glassmorphism**: Beautiful glass-effect UI components
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Fully Responsive**: Optimized for all devices and screen sizes
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt
- **Performance**: Built with Next.js 14 for optimal loading speeds
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hassaansiraj/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Self-Hosted:**
```bash
npm run build
npm run start
```

## 🎨 Customization

### Update Personal Information

1. **Contact Information** (`components/Contact.tsx`):
   - Update email address
   - Update GitHub, LinkedIn URLs
   - Update location

2. **Projects** (`components/Projects.tsx`):
   - Add/remove projects
   - Update project descriptions
   - Add project links

3. **Experience** (`components/Experience.tsx`):
   - Update company information
   - Add/modify achievements
   - Update project highlights

4. **Skills** (`components/Skills.tsx`):
   - Modify skill categories
   - Update skill levels
   - Add new technologies

### Customize Theme

Edit `tailwind.config.ts` to change:
- Color schemes
- Gradient combinations
- Animation speeds
- Spacing and sizing

### Update SEO

Edit `app/layout.tsx` to update:
- Meta title and description
- Open Graph tags
- Twitter card information
- Keywords

## 📱 Sections

1. **Hero**: Eye-catching introduction with 3D background
2. **About**: Personal introduction and highlights
3. **Experience**: Professional work history at Devsinc
4. **Projects**: Featured projects with details
   - V█████c Healthcare Platform
   - Doctors Galaxy
   - BARQ Supply Chain
5. **Skills**: Technical skills with visual representations
6. **Contact**: Social links and contact information

## 🎯 Performance Optimization

- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Intersection Observer for animations
- **Tree Shaking**: Unused code automatically removed
- **Caching**: Optimal cache headers configured

## 🔧 Development

### Project Structure
```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── sitemap.ts       # Dynamic sitemap
│   └── manifest.ts      # PWA manifest
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Experience section
│   ├── Projects.tsx     # Projects section
│   ├── Skills.tsx       # Skills section
│   ├── Contact.tsx      # Contact section
│   ├── Navigation.tsx   # Navigation bar
│   └── ThreeBackground.tsx # 3D background
├── public/
│   └── robots.txt       # SEO robots file
└── tailwind.config.ts   # Tailwind configuration
```

### Available Scripts

```bash
# Development
npm run dev

# Production Build
npm run build

# Start Production Server
npm run start

# Lint Code
npm run lint
```

## 🐛 Troubleshooting

### Three.js Issues
If you encounter Three.js rendering issues:
```bash
npm install --legacy-peer-deps
```

### Build Errors
Clear the cache and rebuild:
```bash
rm -rf .next
npm run build
```

### Styling Issues
Ensure Tailwind is properly configured:
```bash
npx tailwindcss init -p
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Hassaan Siraj**
- Email: hassaan@example.com
- LinkedIn: [linkedin.com/in/hassaansiraj](https://linkedin.com/in/hassaansiraj)
- GitHub: [github.com/hassaansiraj](https://github.com/hassaansiraj)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Three.js community for amazing 3D resources
- Framer Motion for smooth animations
- Vercel for seamless deployment

---

**Built with ❤️ by Hassaan Siraj**

*Last Updated: October 2025*

