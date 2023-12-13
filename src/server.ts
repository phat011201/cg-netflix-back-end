// server.ts

// import modules
import express from "express";
import cors from "cors";

// import routes
import videosRoutes from "./routes/videosRouter";

// import app constants
import { PORT, BASE_URL } from "./constants/appConstant";

// initialize express
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// use routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Video API!");
});
app.use("/api/v1/videos", videosRoutes);

// define port
const port = process.env.PORT || PORT;

// listen to port
app.listen(port, () => {
  console.log(`Server running at ${BASE_URL}`);
});
