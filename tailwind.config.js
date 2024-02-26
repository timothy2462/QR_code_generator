// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,ts,jsx,tsx}",
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// }

import flowbitePlugin from 'flowbite/plugin';

const tailwindConfig = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodyFont': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    flowbitePlugin
  ],
};

export default tailwindConfig;
