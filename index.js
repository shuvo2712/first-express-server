import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Helloooo");
});

app.get("/home", (req, res) => {
  res.send("This is Home");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
