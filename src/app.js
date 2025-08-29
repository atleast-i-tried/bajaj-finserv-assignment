import express from "express";
import bfhlRoutes from "./routes/bfhl.js";

const app = express();
app.use(express.json());

// health check
app.get("/health", (req, res) => res.json({ status: "OK" }));

// main route
app.use("/", bfhlRoutes);

export default app;
