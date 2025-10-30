# Customization Guide

This guide will help you customize the portfolio to match your personal brand and information.

## 📝 Personal Information

### 1. Update Contact Details

**File**: `components/Contact.tsx`

```typescript
// Change email
value: 'your.email@example.com',
link: 'mailto:your.email@example.com',

// Update social links
{
  name: 'GitHub',
  link: 'https://github.com/yourusername',
},
{
  name: 'LinkedIn',
  link: 'https://linkedin.com/in/yourusername',
}
```

### 2. Update Hero Section

**File**: `components/Hero.tsx`

```typescript
// Change name
<span className="gradient-text">Your Name</span>

// Change title
Full Stack Developer

// Change subtitle
Your custom tagline here
```

### 3. Update About Section

**File**: `components/About.tsx`

Update the description paragraphs with your own story and experience.

## 🎨 Theme Customization

### Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  // Add custom colors
}
```

### Gradients

```typescript
backgroundImage: {
  'gradient-custom': 'linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%)',
}
```

## 💼 Projects & Experience

### Add a New Project

**File**: `components/Projects.tsx`

```typescript
{
  title: 'Your Project Name',
  subtitle: 'Brief description',
  description: 'Detailed description',
  icon: <YourIcon size={32} />,
  gradient: 'from-blue-500 to-cyan-500',
  tags: ['Tech1', 'Tech2', 'Tech3'],
  highlights: [
    'Achievement 1',
    'Achievement 2',
  ],
  impact: 'Impact metric',
  github: 'https://github.com/...',
  link: 'https://yourproject.com',
}
```

### Update Experience

**File**: `components/Experience.tsx`

```typescript
{
  company: 'Your Company',
  role: 'Your Role',
  period: 'Start - End',
  location: 'Location',
  description: 'Overview',
  achievements: [
    'Your achievements',
  ],
  projects: [
    // Your projects at this company
  ],
}
```

## 🛠️ Skills

**File**: `components/Skills.tsx`

### Add New Skill Category

```typescript
{
  title: 'Your Category',
  icon: <YourIcon size={32} />,
  color: 'from-color1 to-color2',
  skills: [
    { name: 'Skill Name', level: 90 },
  ],
}
```

### Update Tools

```typescript
const tools = [
  'Tool1', 'Tool2', 'Tool3', // Add your tools
]
```

## 🎭 Animations

### Adjust Animation Speed

**File**: `tailwind.config.ts`

```typescript
animation: {
  'float': 'float 6s ease-in-out infinite', // Change duration
}
```

### Disable Animations

Remove `motion.*` components and replace with regular HTML elements.

## 🖼️ Images & Media

### Add Your Photo

1. Add image to `public/images/profile.jpg`
2. Import in About section:

```typescript
import Image from 'next/image'

<Image
  src="/images/profile.jpg"
  alt="Your Name"
  width={400}
  height={400}
/>
```

### Add Project Screenshots

```typescript
<Image
  src="/images/projects/project-name.jpg"
  alt="Project Name"
  width={800}
  height={600}
/>
```

## 🌐 SEO Optimization

### Update Metadata

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your description',
  keywords: ['Your', 'Keywords'],
  // Update other meta tags
}
```

### Update Sitemap

**File**: `app/sitemap.ts`

```typescript
const baseUrl = 'https://yourdomain.com'
```

## 🎯 Three.js Background

### Customize Particles

**File**: `components/ThreeBackground.tsx`

```typescript
// Change particle count
const particlesCount = 5000 // Increase for more particles

// Change particle color
<PointMaterial
  color="#yourcolor"
  size={0.2} // Adjust size
/>
```

### Modify Wave Grid

```typescript
// Change grid size
const gridSize = 80
const gridDivisions = 80

// Change colors
<meshBasicMaterial color="#yourcolor" />
```

## 📱 Responsive Design

### Adjust Breakpoints

**File**: `tailwind.config.ts`

```typescript
screens: {
  'xs': '475px',
  // Add custom breakpoints
}
```

## 🔧 Advanced Customizations

### Add New Section

1. Create component: `components/YourSection.tsx`
2. Import in `app/page.tsx`:

```typescript
import YourSection from '@/components/YourSection'

export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <YourSection />
    </main>
  )
}
```

### Change Font

**File**: `app/layout.tsx`

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

## 💡 Tips

- Keep animations subtle for better user experience
- Test on multiple devices and browsers
- Optimize images before adding them
- Maintain consistent color scheme
- Keep loading times under 3 seconds
- Ensure text is readable on all backgrounds

## 🆘 Need Help?

- Check the main README.md for basic setup
- Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Framer Motion docs: [framer.com/motion](https://www.framer.com/motion)

---

Happy customizing! 🚀

