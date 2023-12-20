// server.ts

// import modules
import express from "express";

// import routes
import videosRoutes from "./routes/videosRouter";
import usersRouters from "./routes/usersRouter";

// import app constants
import { PORT, BASE_URL } from "./constants/appConstant";

// initialize express
const app = express();

// middleware
app.use(express.json());

// use routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Video API!" });
});

app.use("/api/v1/videos", videosRoutes);
app.use("/api/v1/users", usersRouters);

// define port
const port = process.env.PORT || PORT;

// listen to port
app.listen(port, () => {
  console.log(`Server running at ${BASE_URL}`);
});
