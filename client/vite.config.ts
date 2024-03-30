
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig ({
	plugins: [ svelte() ],
	root: "./src/",
	envDir: "../",
	server: {
		strictPort: true,
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
				secure: false,
				ws: true
			}
		}
	}
});
