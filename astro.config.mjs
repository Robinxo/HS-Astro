import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  server: {
    host: true, // allow external access
    strictPort: false,
    allowedHosts: [
      "localhost",
      ".ngrok-free.app", // allow all ngrok free subdomains
    ],
  },
});
