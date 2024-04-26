import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    jsxInject: `import * as React from 'react'`,
    jsc: {
      transform: {
        react: {
          throwIfNamespace: false,
          // Otras opciones de transformación de react...
        },
      },
    },
  },
})
