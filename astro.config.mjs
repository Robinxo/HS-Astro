import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  server: {
    host: true, // allow external access
    strictPort: false,
    allowedHosts: [
      "localhost",
      ".ngrok-free.app", // allow all ngrok free subdomains
    ],
  },
});

