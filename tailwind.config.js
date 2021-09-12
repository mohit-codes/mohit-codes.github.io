module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#004643",
        paragraph: "#abd1c6",
        button: "#f9bc60",
        buttonText: "#001e1d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
