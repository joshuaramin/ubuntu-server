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
  if (global.gc) global.gc(); // Force garbage collection
  const mem = process.memoryUsage();
  console.log("[HEALTH]", {
    heapUsedMB: (mem.heapUsed / 1024 / 1024).toFixed(2),
    heapTotalMB: (mem.heapTotal / 1024 / 1024).toFixed(2),
    rssMB: (mem.rss / 1024 / 1024).toFixed(2),
    timestamp: new Date(),
  });
}, 60 * 1000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.json({ message: "Hello world" });
});

app.listen(4000, "0.0.0.0", () => {
  console.log("The port is running at http://localhost:4000");
});
