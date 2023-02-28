require("dotenv").config();
const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const notesRouter = require("./controllers/notes");
const usersRouter = require("./controllers/users");

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("dist"));

app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

const PORT = config.PORT || 3001;
app.listen(PORT, () => logger.info(`Server running on port ${config.PORT}`));
