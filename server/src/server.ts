import "dotenv/config";
import express, { type Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./connect";

const app = express();

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(morgan("dev"));

(async () => {
	try {
    await connectDB();
		if (process.env.NODE_ENV !== "production") {
			app.listen(PORT, () =>
				console.log(`App is running on http://localhost:${PORT}`)
			);
		}
	} catch (error) {
		console.error(error);
	}
})();

export default app;
