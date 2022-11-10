// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo'],

  runtimeConfig: {
    private: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
    public: {

    },
  },
  
  apollo: {
    clients: {
      default: {
        // httpEndpoint: `https://api.spacex.land/graphql`
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/explore?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
      }
    },
  },

})
