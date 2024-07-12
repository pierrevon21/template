// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  router: { options: { hashMode: true } },

  css: ["@/assets/css/spinkit.css"],
});
