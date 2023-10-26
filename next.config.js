const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@public"] = path.join(__dirname, "public");
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src",
      "components"
    );
    config.resolve.alias["@constants"] = path.join(
      __dirname,
      "src",
      "constants"
    );
    config.resolve.alias["@utils"] = path.join(__dirname, "src", "utils");
    return config;
  },
};

module.exports = nextConfig;
