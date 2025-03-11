import express from "express";

import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on port https://localhost:${PORT}`);
});

export default app;
