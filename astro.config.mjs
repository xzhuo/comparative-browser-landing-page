export default({
  renderers: ['@astrojs/renderer-svelte'],
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    sitemap: true,
    site: "http://comparativegateway.wustl.edu/",
    pageUrlFormat: "directory",
    trailingSlash: "never"
  }
});
