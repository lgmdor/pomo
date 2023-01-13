import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$src: "./src/",
			$comps: "./src/lib/comps/",
			$assets: "./src/lib/assets/",
			$icons: "./src/lib/assets/icons"
		}
	}
};

export default config;
