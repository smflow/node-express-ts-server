import express from "express";

import { routers } from "./routers";

const r = express.Router();

r.get("/", (_req, res) => res.render("home.ejs"));

r.use(routers);

export const appRouter = r;