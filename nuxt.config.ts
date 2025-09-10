// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  nitro: {
    preset: "bun",
  },
  modules: ["shadcn-nuxt"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },
  components: [{ path: "app/components", extensions: ["vue"] }],
  shadcn: {
    // where to install generated components
    componentDir: "app/components/ui",
    // optional: prefix component names, e.g., UiButton
    prefix: "",
  },
});
