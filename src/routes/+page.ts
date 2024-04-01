
import { DiscordSDK } from "@discord/embedded-app-sdk";

import "$lib/style.css";

//* Initialize Discord App
const discordSDK = new DiscordSDK (import.meta.env.VITE_DISCORD_CLIENT_ID);

discordSDK.ready().then (() => console.log("Discord SDK is Ready"));
