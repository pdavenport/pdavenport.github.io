import nextConfig from "eslint-config-next/core-web-vitals";

export default [
  ...nextConfig,
  {
    rules: {
      "no-unused-vars": "error",
      "react/no-unescaped-entities": "error",
    },
  },
];
