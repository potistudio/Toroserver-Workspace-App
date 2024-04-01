
import { DiscordSDK } from "@discord/embedded-app-sdk";

import "$lib/style.css";

//* Initialize Discord App
let auth;
const discordSDK = new DiscordSDK (import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSDK().then (() => console.log("Discord SDK is Authenticated"));

async function setupDiscordSDK() {
	await discordSDK.ready();
	console.log("Discord SDK is Ready");

	// Authorize with Discord Client
	const { code } = await discordSDK.commands.authorize ({
		client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
		response_type: "code",
		state: "",
		prompt: "none",
		scope: [ "identify", "guilds" ]
	});

	// Retrieve an access_token from your activity's server
	const response = await fetch ("/api/token", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify ({ code, })
	});

	const { access_token } = await response.json();

	// Authenticate with Discord client (using the access_token)
	auth = await discordSDK.commands.authenticate ({ access_token });

	if (auth == null)
		throw new Error("Authenticate Command Failed");
}
