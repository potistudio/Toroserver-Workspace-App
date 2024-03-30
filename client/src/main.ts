
import { DiscordSDK } from "@discord/embedded-app-sdk";

import "./style.css";
import App from "./App.svelte";

//* Initialize Discord App
const discordSDK = new DiscordSDK (import.meta.env.VITE_DISCORD_CLIENT_ID);

discordSDK.ready().then (() => console.log("Discord SDK is Ready"));

//* Initialize Svelte
const app = new App ({
	target: document.getElementById ("app")!
});

export default app;
