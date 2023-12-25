export default {
  optimizeDeps: {
    include: ["jquery"],
  },
  build: {
    rollupOptions: {
      input: {
        index: "/js/global.js",
        // Common entry point for shared modules
        homePage: "index.html", // Entry point for index.html
        aboutPage: "/about1.html", // Entry point for about.html
        contactPage: "/contact1.html",
      },
    },
  },
};
