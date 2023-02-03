import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({}),
		alias: {
			$src: "./src/",
			$lib: "./src/lib/",
			$assets: "./src/assets/",
			$icons: "./src/assets/icons/"
		},
		files: {
			assets: "./src/assets/"
		},
		//outDir: "docs"
		paths: {
			base: dev ? "" : "/pomo"
		}
	}
};

export default config;
