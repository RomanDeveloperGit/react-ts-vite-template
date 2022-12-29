import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

import tsconfigPaths from 'vite-tsconfig-paths';
import sassDeclarations from 'vite-plugin-sass-dts';

export default defineConfig(({ mode }) => {
  const isDevMode = mode === 'development';

  return {
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    css: {
      devSourcemap: true,
      modules: {
        generateScopedName: isDevMode ? '[folder]__[local]__[hash:5]' : '[contenthash:base64]',
      },
    },
    plugins: [
      tsconfigPaths(),
      sassDeclarations(),
      react(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    envPrefix: 'APP',
  };
});
