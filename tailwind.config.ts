import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import Colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cool-gray': Colors.coolGray,
        amber: Colors.amber,
        sky: Colors.sky,
      },
    },
  },
  plugins: [
    formsPlugin,
    require('@tailwindcss/forms'),
    require('windicss/plugin/aspect-ratio'),
  ],
})