// Only processes CSS imported through the JS graph (admin.css). The marketing
// site's main.css/responsive.css load as static <link>s and are untouched.
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
