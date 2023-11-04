/** @type {import('tailwindcss').Config} */
// export default {

//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {  
//       colors: {
//         primaryColor1: '#FF6AC2',
//         primaryColor2: '#EAD7BB',
//         primaryColor3: '#9EDDFF',
        
//       },
//       fontSize: {
//         primarySize1: '24px',
//       },
//       screens: {
//         'sm1': '360px',
//         'sm2': '480px',
//         'sm3': '600px',
//         'sm4': '680px',
//         // => @media (min-width: 640px) { ... }  
//         'md1': '768px',
//         'md2': '960px',
//         // => @media (min-width: 768px) { ... }  
//         'lg': '1024px',
//         // => @media (min-width: 1024px) { ... }
//         'xl': '1280px',
//         // => @media (min-width: 1280px) { ... }
//         '2xl': '1536px',
//         // => @media (min-width: 1536px) { ... }
//       }

//     },
//   },
//   plugins: [],


  
// }


const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor1: '#FF6AC2',
        primaryColor2: '#EAD7BB',
        primaryColor3: '#9EDDFF',
        'gray-rgba': 'rgba(128, 128, 128, 0.4)',
        'pink-rgba': 'rgba(245, 40, 145, 0.5)',
      },
      fontSize: {
        primarySize1: '24px',
      },
      screens: {
        'sm1': '360px',
        'sm2': '480px',
        'sm3': '600px',
        'sm4': '680px',
        'md1': '768px',
        'md2': '960px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [nextui()],
  darkMode: "class", // Added darkMode setting if needed
};
