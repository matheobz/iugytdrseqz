// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/', // Assurez-vous que le chemin est correct
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
      ],
    },
  },

  pages: true, // Active le système de pages
  css: ["~/assets/css/reset.css"], // Ajout du fichier CSS global
  ssr: false, // Désactive le Server-Side Rendering
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
});