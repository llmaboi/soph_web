const tailwindcss = require("tailwindcss");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("postcss-import"),
    require("tailwindcss"),
    isProd ? require("autoprefixer") : null,
  ].filter(Boolean),
};
