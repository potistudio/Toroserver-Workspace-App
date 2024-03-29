
import { defineConfig } from "vite";

export default defineConfig ({
	envDir: "../",
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
				secure: false,
				ws: true
			}
		},
		hmr: {
			clientPort: 443
		}
	}
});
