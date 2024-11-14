// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-08',
  // Nuxt 4 directory structure and features
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  // Nuxt Modules
  // https://nuxt.com/modules
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  image: {
    provider: 'netlify'
  },
  app: {
    head: {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
})
