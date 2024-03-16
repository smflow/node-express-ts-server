import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { expand } from "dotenv-expand";

import { config } from "./config";
import { appRouter } from "./app";
import { notFound } from "./middlewares/not-found.middleware";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();
expand(dotenv.config());

((process as any).appConfig = config);

// app config
app.set("view engine", "ejs");

// Middlewares
// Body parsers
app.use([
  bodyParser.json({ limit: config.bodyParserLimit }),
  bodyParser.urlencoded({ extended: false, limit: config.bodyParserLimit }),
]);

app.use(config.prefix, express.static("public"));

// Main app router
app.use(config.prefix, appRouter);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || config.defaultPort;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});