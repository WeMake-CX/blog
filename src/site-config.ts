export const siteConfig = {
  author: 'Florentin Sakwiset',
  title: 'Florentin\'s Blog',
  subtitle: 'Alles über Florentin.',
  description: 'Florentin\'s persönlicher Blog.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'florentin@wemake.cx',
  socialLinks: [
    {
      text: 'Instagram',
      href: 'https://instagram.com/heyflorentin',
      icon: 'i-simple-icons-instagram',
      header: 'i-ri-instagram-line',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/heyflorentin',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Threads',
      href: 'https://www.threads.net/@heyflorentin',
      icon: 'i-simple-icons-threads',
      header: 'i-ri-threads-line',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/heyflorentin/',
      icon: 'i-simple-icons-linkedin',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: '💙 WeMake',
        href: 'https://wemake.cx',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      {
        text: 'View on Astro',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/kevinwong865/astro-theme-vitesse',
      },
    ],
  },
}

export default siteConfig
