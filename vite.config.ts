// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/main/', // Set to your app's base URL
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { IncomingMessage, ServerResponse } from 'http';

export default defineConfig({
  base: "/alicezou-ca.github.io/",
  plugins: [
    react(),
    {
      name: 'set-js-content-type',
      configureServer(server) {
        server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
          console.log(`Request URL: ${req.url}`); // Debugging log
          if (req.url?.endsWith('.js')) {
            console.log('Setting Content-Type to application/javascript');
            res.setHeader('Content-Type', 'application/javascript');
          }
          next();
        });
      },
    },
  ],
});

