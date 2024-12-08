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
        mydarkorange:'#FBEBB5',
        mylightcolor:'#FAF4F4',
        mytextcolor:'#9F9F9F',
        mylightorange:'#FFF9E5',
        mylightblack:'#D9D9D9',
        mylightpink:'#FAF4F4',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/instagram.png')",
        'contact':"url('/assets/contact.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
