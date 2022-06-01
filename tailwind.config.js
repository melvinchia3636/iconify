const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#318DE1",
          600: "#0A5DA9",
        },
        red: {
          1000: "#E13E31",
        },
      },
      rotate: {
        270: "270deg",
      },
    },
    scale: {
      flip: -1,
    },
    screens: {
      380: "380px",
      390: "390px",
      ssssm: "480px",
      sssm: "500px",
      530: "530px",
      ssm: "590px",
      sm: "640px",
      700: "700px",
      md: "768px",
      lg: "1024px",
      1100: "1100px",
      xl: "1281px",
      "2xl": "1536px",
    },
  },
  content: ["./src/**/*.svelte"],
};
