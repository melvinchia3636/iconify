const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#318DE1',
          600: '#0A5DA9',
        },
        red: {
          1000: '#E13E31',
        },
      },
      rotate: {
        270: "270deg"
      }
    },
    scale: {
      flip: -1
    },
    screens: {
      "sssm": "500px",
      "ssm": "590px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "1100": "1100px",
      "xl": "1281px",
      "2xl": "1536px"
  },
  },
  purge: {
    content: [
      './src/**/*.svelte',

    ],
    enabled: production, // disable purge in dev
  },
};
