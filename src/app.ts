import express from "express";

import { routers } from "./routers";

export const appRouter = express.Router();

appRouter.get("/", (_req, res) => res.render("home.ejs"));

appRouter.use(routers);