import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://movingartdance.se',
  redirects: {
    '/anmälan/höganäs': '/anmalan/viken',
    '/anmalan/hoganas': '/anmalan/viken',
    '/anmälan/åstorp': '/anmalan/astorp'
  },
  integrations: [tailwind(), sitemap({
    filter: page => page !== 'https://movingartdance.se/anmald/'
  }), icon()]
});