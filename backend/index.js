import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { MONGODB_URI, PORT } from "./config.js";
import { bookRoutes } from "./routes/bookRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database connection established");
    app.listen(PORT, () => {
      console.log(`Server Port: ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Trouble connecting to database");
  });
