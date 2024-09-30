import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        red:'#D91E27',
        white:'#FFFFFF',
      },
      backgroundImage: {
        'hero-bg-img':"url(/main-bg.png)",
        'map-bg-img':"url(/map.svg)",
        'user-img':"url(/user.png)",
        'getApp-img':"url(/getApp.png)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
