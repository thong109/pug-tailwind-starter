module.exports = {
  content: ["./src/**/*.{html,js,vue,pug}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d49a7",
      },
      fontSize: {
        sm: "12px",
        base: "14px",
        f13: "13px",
        md: "16px",
        lg: "18px",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      screens: {
        sm: "640px",
        md: "940px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      display: ["before", "first", "first:before"],
    },
  },
  plugins: [
    require("tailwindcss-pseudo-elements"),
    function ({ addUtilities }) {
      addUtilities({
        ".no-before::before": {
          display: "none",
        },
      });
    },
  ],
};
