// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   allowedHosts: [
  //     "89bc-2401-4900-35f7-8077-b98f-753c-da72-5f07.ngrok-free.app",
  //     "*",
  //   ], // ✅ Correct way to allow all hosts
  // },
  plugins: [react()],
  resolve: {
    alias: {
      "@acertn/ui": path.resolve(
        new URL(".", import.meta.url).pathname,
        "node_modules/@shadcn/ui"
      ),
    },
  },
});
