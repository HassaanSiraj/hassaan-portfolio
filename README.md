# Hassaan Siraj - Full Stack Developer Portfolio

A modern, visually stunning, and highly professional personal portfolio website showcasing my work as a **Full Stack Developer** specializing in Ruby on Rails, Node.js, Python, React.js, and Vue.js.

## 👨‍💻 About Me

I'm **Hassaan Siraj**, a passionate Full Stack Developer with **5+ years of experience** building scalable and reliable digital solutions. With expertise across both frontend and backend technologies, I create seamless end-to-end applications that solve real-world problems. My specialization includes:

- **Backend Development**: Ruby on Rails, Node.js, Python, Express.js
- **Frontend Development**: React.js, Vue.js, TypeScript, Tailwind CSS
- **Database & Caching**: PostgreSQL, MongoDB, Redis
- **DevOps & Cloud**: AWS, Docker, CI/CD pipelines, Heroku
- **Integrations**: Stripe API, REST APIs, GraphQL, Webhooks
- **Blockchain**: Web3.js, Smart Contracts, Wallet Integration

**Key Achievements:**
- 💼 100K+ users impacted across projects
- 🚀 50+ successful projects delivered
- 🏆 10+ technologies mastered
- 🌍 Remote-first developer, available worldwide

## 🚀 Features

- **Modern Design**: Light and dark mode with elegant blue-to-purple gradient accents
- **3D Animation**: Three.js powered animated starfield in dark mode
- **Glassmorphism**: Beautiful glass-effect UI components
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Fully Responsive**: Optimized for all devices and screen sizes (mobile, tablet, desktop)
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt
- **Performance**: Built with Next.js 14 for optimal loading speeds
- **TypeScript**: Fully typed for better development experience
- **Theme Toggle**: Seamless light/dark mode switching
- **Professional UI**: Floating clouds, animated backgrounds, responsive layouts

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Testing**: RSpec, Jest
- **Build Tool**: npm
- **Email**: EmailJS for contact form functionality

## 📦 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm, yarn, or pnpm

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/HassaanSiraj/hassaan-portfolio.git
   cd hassaan-portfolio
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
   Navigate to [http://localhost:3000](http://localhost:3000) and you should see the portfolio running!

5. **Start Developing**
   The application will automatically reload as you make changes. Edit `app/page.tsx` or component files to see changes instantly.

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name and title
   - Modify tech stack
   - Update availability status
   - Customize button links

2. **About Section** (`components/About.tsx`):
   - Add personal highlights
   - Update expertise areas
   - Modify descriptions

3. **Contact Information** (`components/Contact.tsx`):
   - Update email address
   - Update GitHub, LinkedIn URLs
   - Update location and availability

4. **Projects** (`components/Projects.tsx`):
   - Add/remove projects
   - Update project descriptions
   - Add project links and technologies

5. **Experience** (`components/Experience.tsx`):
   - Update company information
   - Add/modify achievements
   - Update project highlights

6. **Skills** (`components/Skills.tsx`):
   - Modify skill categories
   - Update skill levels
   - Add new technologies

7. **Portfolio Logo** (`public/portfolio.jpg`):
   - Replace with your own photo
   - Update favicon automatically uses this image

### Customize Theme

Edit `app/theme-colors.css` to change:
- Background colors
- Light/dark mode color schemes
- Text colors
- Card backgrounds

Edit `tailwind.config.ts` to change:
- Gradient combinations
- Animation speeds
- Spacing and sizing
- Custom color palettes

### Update SEO

Edit `app/layout.tsx` to update:
- Meta title and description
- Keywords
- Open Graph tags
- Twitter card information


### Configure EmailJS for Contact Form

The portfolio includes a functional contact form powered by **EmailJS** that sends emails directly to your inbox without requiring a backend server.

**Setup Instructions:**

1. **Create an EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com) and sign up for a free account
   - Verify your email address

2. **Get Your Credentials**
   - **Public Key**: Account → API Keys → Copy Public Key
   - **Service ID**: Email Services → Create/Select Service → Copy Service ID
   - **Template ID**: Email Templates → Create Template → Copy Template ID

3. **Configure Environment Variables**
   - Create a `.env.local` file in the project root (if not already created)
   - Add your EmailJS credentials:
     ```bash
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
     ```

4. **Email Template Variables**
   - When creating your EmailJS template, use these variables:
     - `{{name}}` - Visitor's name
     - `{{email}}` - Visitor's email
     - `{{message}}` - Visitor's message
     - `{{time}}` - Timestamp of submission

5. **Test the Contact Form**
   - Run `npm run dev`
   - Fill out the contact form in the Contact section
   - Click "Send Message"
   - Check your email to verify it works!

**Free Tier Details:**
- 200 emails per month
- For higher volume, upgrade your EmailJS plan

For detailed setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

## 📱 Portfolio Sections

1. **Hero**: Eye-catching introduction with animated background and availability status
2. **Tech Stack**: Display of technologies and tools you work with
3. **About**: Personal introduction and professional highlights
4. **Experience**: Professional work history with achievements
5. **Projects**: Featured projects with descriptions and technologies
   - Validic Healthcare Platform (100K+ Users)
   - Doctors Galaxy (Real-time Platform)
   - BARQ Supply Chain (10x Growth)
6. **Skills**: Technical skills organized by category
7. **Story**: Timeline of your career journey
8. **Contact**: Social links and contact information

## 🎯 Performance Optimization

- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Intersection Observer for animations
- **Tree Shaking**: Unused code automatically removed
- **Caching**: Optimal cache headers configured
- **Minification**: Production builds automatically minified

## 🔧 Development

### Project Structure
```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── theme-colors.css     # Theme configuration
│   ├── sitemap.ts           # Dynamic sitemap
│   └── manifest.ts          # PWA manifest
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Experience section
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills section
│   ├── Contact.tsx          # Contact section
│   ├── Navigation.tsx       # Navigation bar
│   ├── ThemeToggle.tsx      # Light/dark mode
│   └── ...
├── context/
│   └── ThemeContext.tsx     # Theme management
├── public/
│   ├── portfolio.jpg        # Your profile image
│   ├── resume.pdf           # Your resume
│   └── favicon.svg          # Favicon
└── tailwind.config.ts       # Tailwind configuration
```

### Available Scripts

```bash
# Development
npm run dev                  # Start dev server at http://localhost:3000

# Production
npm run build               # Build for production
npm run start               # Start production server

# Linting
npm run lint                # Run ESLint
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

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact & Connect

**Hassaan Siraj** - Full Stack Developer

- 📧 Email: hassaan@example.com
- 💼 LinkedIn: [linkedin.com/in/hassaansiraj](https://www.linkedin.com/in/hassaansiraj/)
- 🐙 GitHub: [github.com/HassaanSiraj](https://github.com/HassaanSiraj)
- 🌐 Website: [Your portfolio URL]
- 📍 Location: Remote, Available Worldwide

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Three.js community for amazing 3D resources
- Framer Motion for smooth animations
- Next.js team for the amazing framework
- Open source community for incredible tools

---

**Built with ❤️ by Hassaan Siraj**

*Last Updated: October 2025*

