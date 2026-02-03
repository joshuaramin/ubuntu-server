import express from "express";

export const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
    timestamp: new Date(),
  });
});

setInterval(() => {
  const health = {
    status: "ok",
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
    timestamp: new Date(),
  };
  console.log("[HEALTH]", JSON.stringify(health));
}, 60 * 1000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.json({ message: "Hello world" });
});

app.listen(4000, "0.0.0.0", () => {
  console.log("The port is running at http://localhost:4000");
});
