
// dotenv.config ({ path: "../.env" });

// const app = express();
// const port = 3000;

// app.post ("/api", (req, res) => {
// 	console.log ("Hello World");
// });

// // Open the Port
// app.listen (port, () => {
// 	console.log (`Server Listening at http://localhost:${port}`);
// });

export const actions = {
	default: async event => {
		console.log ("Hello World");
	}
}
