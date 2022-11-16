import { defineNuxtConfig } from 'nuxt/config'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        // httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/e41op0ckhruz/explore?access_token=SnLR_zaGWeaZJkcJKEBE2gueCsM0XVJHsw91vGe-Lbo`,
      },
    },
  },

})
