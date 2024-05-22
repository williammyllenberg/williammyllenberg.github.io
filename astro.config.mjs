import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://movingartdance.se',
	redirects: {
		'https://movingartdance.se/anmälan/höganäs/': 'https://movingartdance.se/anmalan/hoganas/',
		'https://movingartdance.se/anmälan/åstorp/': 'https://movingartdance.se/anmalan/astorp/'
	},
	integrations: [tailwind(), sitemap({
		filter: (page) => page !== 'https://movingartdance.se/anmald/'
	})]
});