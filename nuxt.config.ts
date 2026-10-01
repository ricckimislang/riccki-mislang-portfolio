export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#FAFAFA' },
        { name: 'color-scheme', content: 'light dark' },
        { name: 'description', content: 'A full stack developer portfolio showing thoughtful products, systems, and outcomes.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap' },
      ],
      script: [
        {
          innerHTML: `(function(){try{var saved=localStorage.getItem('portfolio-theme');var dark=saved==='dark'||(!saved&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark);document.documentElement.dataset.theme=dark?'dark':'light'}catch(e){}})()`,
          tagPosition: 'head',
        },
      ],
    },
  },
  tailwindcss: { viewer: false },
  typescript: { strict: true, typeCheck: true },
});
