import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    status: "success",
    message: "hello from express server",
  });
});

app.listen(8000, () => {
  console.log("server running on 8000");
});
