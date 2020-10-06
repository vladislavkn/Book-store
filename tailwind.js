module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        display: ["Pacifico", "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        veil: "rgba(0, 0, 0, 0.1)",
      },
      boxShadow: {
        mdt:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        white:
          "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)",
        material:
          "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
      },
      inset: {
        6: "1.5rem",
      },
      height: {
        13: "3.25rem",
      },
      width: {
        13: "3.25rem",
      },
    },
  },
  variants: {
    backgroundColor: ["hover", "active"],
  },
  plugins: [],
};
