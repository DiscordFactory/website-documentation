import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [
    formsPlugin,
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
})