/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        'flip': '1,-1',
      },
      scrollbarWidth: {
        'thin': "thin",
      },
      textStrokeWidth: {
        6: "6px",
        2: "2px",
      },
      textStrokeColor: {
        "black": "black",
        "white": "white",
        "red": "red",
        "white80": "rgba(255, 255, 255, 0.8)",
        "darkgray": "#2b2b2b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        'glow': "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de",
        'default': "0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000",
        'lightred': "0px 0px 60px rgba(255, 50, 50, 0.7)",
        'red': '0 0 5px #f72119, 0 0 15px #f72119, 0 0 20px #f72119, 0 0 40px #f72119, 0 0 60px #f72119, 0 0 10px #f72119, 0 0 98px #f72119'
      },
    },
  },
  variants: {
    extend: {
      textStrokeWidth: ["responsive"],
      textStrokeColor: ["responsive"],
      textShadow: ["responsive"],
      scale: ["responsive"],
    }
  },
  plugins: [
    function ({ addUtilities, theme, variants }) {
      const newUtilities = {};
      Object.entries(theme('textStrokeWidth')).map(([name, value]) => {
        const className = name === 'default' ? 'text-stroke' : `text-stroke-${name}`;
        newUtilities[`.${className}`] = {
          '-webkit-text-stroke-width': value,
        };
      });
      Object.entries(theme('textStrokeColor')).map(([name, value]) => {
        const className = name === 'default' ? 'text-stroke-color' : `text-stroke-color-${name}`;
        newUtilities[`.${className}`] = {
          '-webkit-text-stroke-color': value,
        };
      });
      Object.entries(theme('textShadow')).map(([name, value]) => {
        const className = name === 'default' ? 'text-shadow' : `text-shadow-${name}`;
        newUtilities[`.${className}`] = {
          'text-shadow': value,
        };
      });

      Object.entries(theme('scale')).map(([name, value]) => {
        const className = name === 'default' ? 'scale' : `scale-${name}`;
        newUtilities[`.${className}`] = {
          'transform': `scale(${value})`,
        };
      });

      Object.entries(theme('scrollbarWidth')).map(([name, value]) => {
        const className = name === 'default' ? 'scrollbar-width' : `scrollbar-width-${name}`;
        newUtilities[`.${className}`] = {
          'scrollbar-width': value,
        };
      });
  
      addUtilities(newUtilities, variants('textStrokeWidth', 'textStrokeColor', 'textShadow', 'scale, scrollbarWidth'));
    },
  ],
};
