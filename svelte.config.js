import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null
		}),
		alias: {
			$src: "./src/",
			$comps: "./src/lib/comps/",
			$assets: "./src/lib/assets/",
			$icons: "./src/lib/assets/icons"
		},
		files: {
			assets: "./src/lib/assets"
		}
		//outDir: "build"
	}
};

export default config;
