export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Alex Morgan — Full stack developer',
      meta: [
        { name: 'description', content: 'A considered portfolio of full stack products, systems, and experiments by Alex Morgan.' },
        { name: 'theme-color', content: '#fafafa' },
        { property: 'og:title', content: 'Alex Morgan — Full stack developer' },
        { property: 'og:description', content: 'A considered portfolio of full stack products, systems, and experiments.' },
        { property: 'og:type', content: 'website' }
      ],
      script: [
        {
          innerHTML: `(function(){try{var key='portfolio-theme';var saved=localStorage.getItem(key);var mode=(saved==='dark'||saved==='light')?saved:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=mode;document.documentElement.style.colorScheme=mode}catch(e){}})()`
        }
      ]
    }
  },
  typescript: { strict: true }
})
