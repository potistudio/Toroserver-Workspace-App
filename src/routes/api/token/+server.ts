
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async req => {
	const response = await fetch ("https://discord.com/api/oauth2/token", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams ({
			client_id: process.env.VITE_DISCORD_CLIENT_ID,
			client_secret: process.env.DISCORD_CLIENT_SECRET,
			grant_type: "authorization_code",
			code: (await req.request.json()).code
		})
	});

	return response;
}
