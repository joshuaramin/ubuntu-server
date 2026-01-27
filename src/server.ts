import express from "express";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(4000, () => {
  console.log("The port is running at http://localhost:4000");
});
