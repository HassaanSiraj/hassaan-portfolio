import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hassaan Siraj - Full Stack Developer',
    short_name: 'Hassaan Siraj',
    description: 'Full Stack Developer specializing in Ruby on Rails, Node.js, Python, React.js, and Vue.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#a855f7',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}

